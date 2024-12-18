import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

import '../css/recipe.css';

import { Recipe } from '../store/RecipeTypes';
import { ReducerMeta } from '../../common/store/GenericReducerType';
import IngredientsPanelContainer from '../containers/IngredientsPanelContainer';
import RecipeHeader from './RecipeHeader';
import DirectionsPanel from './DirectionsPanel';

interface IRecipeSchemeProps {
  recipe:       Recipe | undefined;
  recipeMeta:   ReducerMeta;
  userId:       number | undefined;
  editable:     boolean;

  onEditRecipe: () => void;
  deleteRecipe: () => void;
  onAddToMenuClick: () => void;
}

const RecipeScheme: React.FC<IRecipeSchemeProps> = ({ recipe, recipeMeta, userId, editable, onEditRecipe, deleteRecipe, onAddToMenuClick }: IRecipeSchemeProps) => (
  <div className={classNames('recipe-details', { 'with-image': recipe != null && recipe.photo })}>
    <RecipeHeader
        recipe = {recipe}
        editable = {editable}
        onEditRecipe = {onEditRecipe}
        onAddToMenuClick = {onAddToMenuClick}
        deleteRecipe = {deleteRecipe} />

    <Row>
      <Col xl={4} lg={12}>
        <IngredientsPanelContainer
            recipe     = {recipe}
            recipeMeta = {recipeMeta}
            userId     = {userId}
            />
      </Col>
      <hr className='d-block d-xl-none' />
      <Col xl={8} lg={12}>
        <DirectionsPanel
            directions  = {recipe?.directions ?? ''}
            recipeMeta  = {recipeMeta}
            ingredients = {recipe?.ingredientGroups ?? []} />
      </Col>
    </Row>
  </div>
);

export default RecipeScheme;
