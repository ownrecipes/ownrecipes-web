import { useCallback, useEffect, useRef, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import * as _ from 'lodash-es';

import Button from '../../common/components/Button';
import Icon from '../../common/components/Icon';
import Input from '../../common/components/Input/Input';
import InputAdornment from '../../common/components/Input/InputAdornment';

const messages = defineMessages({
  search_title: {
    id: 'searchbar.title',
    description: 'Heading for the search page',
    defaultMessage: 'Search',
  },
  input_placeholder: {
    id: 'searchbar.placeholder',
    description: 'SearchBar input placeholder',
    defaultMessage: 'Enter a title, tag, or ingredient',
  },
  input_clear: {
    id: 'input.clear',
    description: 'Button to clear the input value (text)',
    defaultMessage: 'Clear input',
  },
});

export interface ISearchBarProps {
  value:  string;
  doSearch: (value: string) => void;
}

interface IFormData {
  value: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, doSearch }: ISearchBarProps) => {
  const { formatMessage } = useIntl();

  const [formData, setFormData] = useState<IFormData>({ value: value ?? '' });
  const previousSearch = useRef<string>(value ?? '');

  useEffect(() => {
    if (formData.value !== value) {
      setFormData({ value: value });
    }
  }, [value]);

  useEffect(() => {
    if (previousSearch.current !== formData.value) {
      doSearch(formData.value);
      previousSearch.current = formData.value;
    }
  }, [formData]);

  const handleChange = useCallback((attr: string, val: string) => {
    setFormData(prev => {
      const newState = _.cloneDeep(prev);
      _.set(newState, attr, val);
      return newState;
    });
  }, []);

  const handleClearInput = useCallback(() => {
    setFormData({ value: '' });
  }, []);

  const clearInput = (
    <InputAdornment position='end'>
      <Button id='clear_search_input' variant='secondary' className='search-clear' onClick={handleClearInput} aria-label={formatMessage(messages.input_clear)}>
        <Icon icon='x' variant='light' size='2x' />
      </Button>
    </InputAdornment>
  );

  return (
    <>
      <h1 className='sr-only'>{formatMessage(messages.search_title)}</h1>
      <Input
          name  = 'value'
          value = {formData.value}
          placeholder = {formatMessage(messages.input_placeholder)}
          required
          inputAdornmentStart = {<Icon icon='search' variant='light' />}
          inputAdornmentEnd = {formData.value.length > 0 ? clearInput : undefined}
          onChange = {handleChange}
          debounceTimeout = {400}
          className = 'search-bar' />
    </>
  );
};

export default SearchBar;
