import { useCallback, useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router';
import { defineMessages, useIntl } from 'react-intl';
import { Button } from 'react-bootstrap';

import '../css/browse.css';

import { RootState } from '../../app/Store';
import { Recipe, RecipeList } from '../../recipe/store/RecipeTypes';
import * as RecipeActions from '../../recipe/store/RecipeActions';
import ListRecipes from '../components/ListRecipes';
import * as MiniBrowseActions from '../store/MiniBrowseActions';
import { useDispatch, useSelector } from '../../common/store/redux';
import Icon from '../../common/components/Icon';
import Tooltip from '../../common/components/Tooltip';

interface IMiniBrowseProps {
  heading: string;
  count: number;
  filters?: Record<string, string>;
}

function buildUrlFilter(count: number, filters: Record<string, string> | undefined): string {
  const searchParams = new URLSearchParams(filters);
  searchParams.append('limit', count.toString());
  return searchParams.toString();
}

const MiniBrowse: React.FC<IMiniBrowseProps> = ({ heading, count, filters }: IMiniBrowseProps) => {
  const { formatMessage }  = useIntl();
  const messages = defineMessages({
    shuffleSuggestionsButton: {
      id: 'browse.shuffle_suggestions_button_title',
      description: 'Title/tooltip of the icon button to shuffle the suggestions.',
      defaultMessage: 'Shuffle suggestions',
    },
  });

  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  const slug = params.recipe;

  const miniBrowseItems = useSelector((state: RootState) => state.browse.miniBrowse.items);
  const differentMiniBrowseItems = useMemo(() => miniBrowseItems?.filter(itm => itm.slug !== slug), [slug, miniBrowseItems]);
  const recipeSlug = params.recipe ?? '';

  useEffect(() => {
    dispatch(MiniBrowseActions.loadMiniBrowse(buildUrlFilter(count, filters)));
  }, [location]);

  const handleShuffleClick = useCallback(() => {
    dispatch(MiniBrowseActions.loadMiniBrowse(buildUrlFilter(count, filters)));
  }, [dispatch, buildUrlFilter, count, filters]);

  const handleOpenRecipe = useCallback((rec: RecipeList) => {
    if (recipeSlug !== rec.slug) {
      dispatch(RecipeActions.preload(rec as Recipe));
    }
  }, [recipeSlug, dispatch]);

  if (differentMiniBrowseItems != null && differentMiniBrowseItems.length === 0) return null;

  return (
    <>
      <h2 id='suggestions-heading'>{heading}</h2>
      <Tooltip id='shuffle tooltip' tooltip={formatMessage(messages.shuffleSuggestionsButton)}>
        <Button id='shuffle-suggestions-button' variant='outline-primary' aria-label={formatMessage(messages.shuffleSuggestionsButton)} onClick={handleShuffleClick} className='print-hidden'>
          <Icon icon='arrow-repeat' variant='light' />
        </Button>
      </Tooltip>
      <ListRecipes data={differentMiniBrowseItems} onOpenRecipe={handleOpenRecipe} />
    </>
  );
};

export default MiniBrowse;
