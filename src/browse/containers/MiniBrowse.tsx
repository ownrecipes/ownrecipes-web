import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import '../css/browse.css';

import { CombinedStore } from '../../app/Store';
import ListRecipes from '../components/ListRecipes';
import * as MiniBrowseActions from '../store/MiniBrowseActions';

interface IMiniBrowseProps {
  qs: string;
}

const MiniBrowse: React.FC<IMiniBrowseProps> = ({ qs }: IMiniBrowseProps) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const miniBrowseState = useSelector((state: CombinedStore) => state.browse.miniBrowse);

  useEffect(() => {
    dispatch(MiniBrowseActions.loadMiniBrowse(qs));
  }, [location]);

  return (
    <ListRecipes data={miniBrowseState.items} />
  );
};

export default MiniBrowse;