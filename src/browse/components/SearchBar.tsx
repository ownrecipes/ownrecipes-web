import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { defineMessages, useIntl } from 'react-intl';
import * as _ from 'lodash';

import Icon from '../../common/components/Icon';
import Input from '../../common/components/Input';

export interface ISearchBarProps {
  value:  string;
  doSearch: (value: string) => void;
}

interface IFormData {
  value: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, doSearch }: ISearchBarProps) => {
  const intl = useIntl();

  const { formatMessage } = intl;
  const messages = defineMessages({
    input_placeholder: {
      id: 'searchbar.placeholder',
      description: 'SearchBar input placeholder',
      defaultMessage: 'Enter a title, tag, or ingredient',
    },
  });

  const [formData, setFormData] = useState<IFormData>({ value: value ?? '' });

  useEffect(() => {
    setFormData({ value: value });
  }, [value]);

  useEffect(() => {
    doSearch(formData.value);
  }, [formData]);

  const handleChange = (attr: string, val: string) => {
    setFormData(prev => {
      const newState = _.cloneDeep(prev);
      _.set(newState, attr, val);
      return newState;
    });
  };

  const handleClearInput = () => {
    setFormData({ value: '' });
  };

  const clearInput = (
    <Button variant='secondary' className='search-clear' onClick={handleClearInput}>
      <Icon icon='x' variant='light' size='2x' />
    </Button>
  );

  return (
    <Input
        name  = 'value'
        value = {formData.value}
        placeholder = {formatMessage(messages.input_placeholder)}
        required
        inputAdornmentStart = {<Icon icon='search' variant='light' />}
        inputAdornmentEnd = {formData.value.length > 0 ? clearInput : undefined}
        change = {handleChange}
        className = 'search-bar' />
  );
};

export default SearchBar;