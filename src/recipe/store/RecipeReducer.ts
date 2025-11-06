import * as _ from 'lodash-es';

import { calcIngredientQuantity, calcSubrecipesQuantity } from './calcQuantities';
import fq from '../utilts/formatQuantity';
import ReduxHelper, { ACTION, GenericItemReducerAction } from '../../common/store/ReduxHelper';
import { Recipe, RecipeAction, RecipeActionTypes, RecipeState, RECIPE_STORE } from './RecipeTypes';

const defaultState: RecipeState = ReduxHelper.getItemReducerDefaultState<Recipe>(RECIPE_STORE);

const recipe = (state = defaultState, action: RecipeAction): RecipeState => {
  if (action.store === state.ident) {
    switch (action.typs) {
      case ACTION.GET_SUCCESS:
      case ACTION.PRELOAD:
        {
          const actionRecipe = action.payload;
          if (!actionRecipe) return ReduxHelper.setItem<Recipe, RecipeState>(state, undefined);

          const isNew = state.item == null || state.item.id !== actionRecipe.id || state.item.ingredientGroups == null;
          const customServings = isNew ? (actionRecipe.customServings ?? 1) : (state.item?.customServings ?? 1);
          let updItem: Recipe = _.clone(actionRecipe as Recipe);

          if (actionRecipe.servings != null && actionRecipe.customServings != null && actionRecipe.subrecipes && actionRecipe.ingredientGroups) {
            const subRecipes = calcSubrecipesQuantity(updItem.subrecipes, fq.bind(this, updItem.servings, customServings));
            const ingredients = calcIngredientQuantity(updItem.ingredientGroups, fq.bind(this, updItem.servings, customServings));
            updItem = {
              ...updItem,
              subrecipes:       subRecipes,
              ingredientGroups: ingredients,
              customServings:   customServings,
            };
          }

          if (action.typs === ACTION.PRELOAD) {
            return ReduxHelper.preloadItem(state, updItem);
          } else {
            return ReduxHelper.setItem(state, updItem);
          }
        }
      case RecipeActionTypes.RECIPE_DELETE:
        return defaultState;
      case RecipeActionTypes.RECIPE_INGREDIENT_SERVINGS_UPDATE:
        {
          if (state.item == null) return state;

          const { customServings } = action.payload;
          let updItem: Recipe = _.clone(state.item);

          const subRecipes = calcSubrecipesQuantity(updItem.subrecipes, fq.bind(this, updItem.servings, customServings));
          const ingredients = calcIngredientQuantity(updItem.ingredientGroups, fq.bind(this, updItem.servings, customServings));
          updItem = {
            ...updItem,
            subrecipes: subRecipes,
            ingredientGroups: ingredients,
            customServings: customServings,
          };

          return ReduxHelper.setItem(state, updItem);
        }
      default: break;
    }
  }

  return ReduxHelper.caseItemDefaultReducer(state, action as GenericItemReducerAction<Recipe>, defaultState);
};

export default recipe;
