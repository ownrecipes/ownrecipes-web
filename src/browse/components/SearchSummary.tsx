import { defineMessages, useIntl } from 'react-intl';
import { SearchResult } from '../store/SearchTypes';
import P from '../../common/components/P';
import DefaultFilters from '../constants/DefaultFilters';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { optionallyFormatMessage } from '../../common/utility';

export interface ISearchSummaryProps {
  search:   SearchResult | undefined;
  qs:       Record<string, string>;
  buildUrl: (qsTitle: string, recipeSlug: string, multiSelect?: boolean) => string;
}

const SearchSummary: React.FC<ISearchSummaryProps> = ({ search, qs, buildUrl }: ISearchSummaryProps) => {
  const intl = useIntl();

  const { formatMessage } = intl;
  const messages = defineMessages({
    search_summary_results: {
      id: 'searchsummary.results',
      description: 'Number of results, if there is no pagination.',
      defaultMessage: '{resultsCount, plural, one {# result} other {# results}}',
    },
    search_summary_results_pagination: {
      id: 'searchsummary.results_pagination',
      description: 'Number of results, with pagination from - to.',
      defaultMessage: '{offset}-{offsetLast} of {resultsCount} results',
    },
    search_summary_sort_by: {
      id: 'searchsummary.sort_by',
      description: 'Sort by title/...',
      defaultMessage: 'Sort by: {sort}',
    },

    sort_by_pub_date: {
      id: 'sort_by.pub_date',
      defaultMessage: 'Create date',
    },
    sort_by_rating: {
      id: 'sort_by.rating',
      defaultMessage: 'Rating',
    },
    sort_by_title: {
      id: 'sort_by.title',
      defaultMessage: 'Title',
    },
  });

  const toSortSlug = (sort: string): string => (
    sort.startsWith('-') ? sort.substring(1) : sort
  );

  const resultsCount: number | undefined = search?.totalRecipes;
  const offset: number = qs.offset != null ? parseInt(qs.offset) : 0;
  const limit: number  = qs.limit != null ? parseInt(qs.limit) : (DefaultFilters.limit ?? 12);
  const withPagination = search != null && search.totalRecipes > limit;
  const currentSort    = qs.ordering != null ? toSortSlug(qs.ordering) : 'title';

  const handleSortByClick = (event: React.MouseEvent<HTMLAnchorElement>, sortSlug: string) => {
    if (currentSort === sortSlug) {
      event.preventDefault();
    }
  };

  const dropdownItems = ['title', '-pub_date', '-rating'].map(sort => {
    const sortSlug = toSortSlug(sort);
    return (
      <Dropdown.Item key={sort} as={Link} to={buildUrl('ordering', sortSlug)} active={currentSort === sortSlug} onClick={(event: React.MouseEvent<HTMLAnchorElement>) => handleSortByClick(event, sortSlug)}>
        {optionallyFormatMessage(intl, 'sort_by.', sortSlug)}
      </Dropdown.Item>
    );
  });

  return (
    <div className='search-summary'>
      <P className='results'>
        {withPagination  && formatMessage(messages.search_summary_results_pagination, { offset: offset, offsetLast: offset + limit, resultsCount: resultsCount })}
        {!withPagination && formatMessage(messages.search_summary_results, { resultsCount: resultsCount ?? 0 })}
      </P>
      <Dropdown className='sort-by-dropdown'>
        <Dropdown.Toggle variant='outline-primary' id='sort-by-button' disabled={search == null}>
          {formatMessage(messages.search_summary_sort_by, { sort: optionallyFormatMessage(intl, 'sort_by.', currentSort) })}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {dropdownItems}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SearchSummary;