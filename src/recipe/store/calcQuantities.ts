import { Ingredient, IngredientGroup, SubRecipe } from './RecipeTypes';

export type QuantityFormatter = (numerator: number | undefined, denominator: number) => string;

type RecalcFunction<T> = (ingr: T) => T;

const ingredients = (igs: Array<IngredientGroup>, cb: RecalcFunction<Ingredient>): Array<IngredientGroup> => igs.map(ig => ({
  ...ig,
  ingredients: ig.ingredients.map(ingredient => cb(ingredient)),
}));

export function calcIngredientQuantity(igs: Array<IngredientGroup>, fq: QuantityFormatter): Array<IngredientGroup> {
  return ingredients(igs, ingr => {
    const customQuantity = fq(ingr.numerator, ingr.denominator);
    return { ...ingr, quantity: customQuantity };
  });
}

export function calcSubrecipesQuantity(subrecipes: Array<SubRecipe>, fq: QuantityFormatter): Array<SubRecipe> {
  return subrecipes.map(subrecipe => {
    const customQuantity = fq(subrecipe.numerator, subrecipe.denominator);
    return { ...subrecipe, quantity: customQuantity };
  });
}
