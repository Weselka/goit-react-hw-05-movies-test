import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import {
  SearchbarHeader,
  FormBlock,
  BtnSearch,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.error('Enter a name');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchbarHeader>
      <FormBlock onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          // placeholder="Search movies"
          value={query}
          onChange={handleChange}
          name="name"
        />
        <BtnSearch type="submit">
          Search
          <SearchFormButtonLabel></SearchFormButtonLabel>
        </BtnSearch>
      </FormBlock>
    </SearchbarHeader>
  );
};
  
  SearchForm.propTypes = {
    state: PropTypes.shape({
      query: PropTypes.string.isRequired,
      handleChange: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired,
    }),
    onSubmit: PropTypes.func.isRequired,
  };
