import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import { Button, Card } from 'react-bootstrap';

import '../css/filter.css';

import Filter from './Filter';
import Icon from '../../common/components/Icon';
import { CategoryCount, RatingCount } from '../store/FilterTypes';

export interface ISearchMenuProps {
  qs: Record<string, string>;
  courses:  Array<CategoryCount> | undefined;
  cuisines: Array<CategoryCount> | undefined;
  ratings:  Array<RatingCount>   | undefined;

  buildUrl: (qsTitle: string, recipeSlug: string, multiSelect?: boolean) => string;
}

const SearchMenu: React.FC<ISearchMenuProps> = ({ qs, courses, cuisines, ratings, buildUrl }: ISearchMenuProps) => {
  const intl = useIntl();

  const messages = defineMessages({
    reset: {
      id: 'filter.reset',
      description: 'Filter reset',
      defaultMessage: 'Reset',
    },
    filter_course: {
      id: 'filter.filter_course',
      description: 'Filter field course',
      defaultMessage: 'Courses',
    },
    filter_cuisine: {
      id: 'filter.filter_cuisine',
      description: 'Filter field cuisine',
      defaultMessage: 'Cuisines',
    },
    filter_rating: {
      id: 'filter.filter_rating',
      description: 'Filter field rating',
      defaultMessage: 'Ratings',
    },
    filter_limit: {
      id: 'filter.filter_limit',
      description: 'Filter field limit',
      defaultMessage: 'Recipes per Page',
    },
    title: {
      id: 'filter.title',
      description: 'Title',
      defaultMessage: 'Title',
    },
    rating: {
      id: 'filter.rating',
      description: 'rating',
      defaultMessage: 'Rating',
    },
    pub_date: {
      id: 'filter.pub_date',
      description: 'pub_date',
      defaultMessage: 'Created Date',
    },
    filters: {
      id: 'filter.filters',
      description: 'Filters',
      defaultMessage: 'Filters',
    },
    show_filters: {
      id: 'filter.show_filters',
      description: 'Show Filters',
      defaultMessage: 'Show Filters',
    },
    hide_filters: {
      id: 'filter.hide_filters',
      description: 'Hide Filters',
      defaultMessage: 'Hide Filters',
    },
    filter_ordering: {
      id: 'filter.filter_ordering',
      description: 'Filter field ordering',
      defaultMessage: 'Ordering',
    },
    x_stars: {
      id: 'filter.x_stars',
      description: 'X Stars',
      defaultMessage: '{rating, number} stars',
    },
  });

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  const hasActiveFilter = Object.keys(qs).filter(key => key !== 'limit' && key !== 'offset').length !== 0;

  const mobileHeader = (
    <div className='sidebar-header'>
      <Button type='button' variant='transparent' className='filter-header' onClick={toggleMenu}>
        {showMenu ? intl.formatMessage(messages.hide_filters) : intl.formatMessage(messages.show_filters)}
        <Icon icon={showMenu ? 'chevron-up' : 'chevron-down'} variant='light' className={classNames({ 'reset-margin': hasActiveFilter })} />
      </Button>
      {hasActiveFilter && (
        <div className='filter-header-clear'>
          <Link className='clear-filter-mobile btn btn-transparent' to={buildUrl('', '')}>
            {intl.formatMessage(messages.reset)}
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <Card>
      <Card.Header className='visible-xs'>
        {mobileHeader}
      </Card.Header>
      <Card.Header className='hidden-xs filter-title'>
        {intl.formatMessage(messages.filters)}
      </Card.Header>
      <Card.Text as='div' className={classNames('sidebar', { 'hidden-xs': !showMenu })}>
        <ul className='filter-group-list'>
          <Filter
              title    = {intl.formatMessage(messages.filter_course)}
              qsTitle  = 'course'
              data     = {courses ?? []}
              qs       = {qs}
              multiSelect
              buildUrl = {buildUrl} />
          <Filter
              title    = {intl.formatMessage(messages.filter_cuisine)}
              qsTitle  = 'cuisine'
              data     = {cuisines ?? []}
              qs       = {qs}
              multiSelect
              buildUrl = {buildUrl} />
          <Filter
              title    = {intl.formatMessage(messages.filter_rating)}
              qsTitle  = 'rating'
              data     = {ratings?.map(r => ({
                  id:     r.rating,
                  rating: r.rating,
                  total:  r.total,
                  slug:   String(r.rating),
                  title:  intl.formatMessage(messages.x_stars, { rating: r.rating }),
              })) ?? []}
              qs       = {qs}
              multiSelect
              buildUrl = {buildUrl} />
        </ul>
        {hasActiveFilter && (
          <div className='row reset-search-row hidden-xs'>
            <Link className='btn btn-outline-danger reset-search hidden-xs' to={buildUrl('', '')}>
              {intl.formatMessage(messages.reset)}
            </Link>
          </div>
        )}
      </Card.Text>
    </Card>
  );
};

export default SearchMenu;