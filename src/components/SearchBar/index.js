import React from 'react';
import { Input } from '@rocketseat/unform';
import { FaSearch } from 'react-icons/fa';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { MyForm } from './styles';

export default function SearchBar({ setParams, setDispatch }) {
  const schema = Yup.object().shape({
    pesquisa: Yup.string()
      .min(1)
      .typeError('Entre com pelomenos  caracter'),
  });

  async function handleSearch({ pesquisa }) {
    const params = { page: 1, search: pesquisa };
    setParams(params);
    setDispatch(Math.random() * 100);
  }

  return (
    <MyForm onSubmit={handleSearch} schema={schema}>
      <Input name="pesquisa" placeholder="pesquise por nome ou id" />
      <button type="submit">
        <FaSearch />
      </button>
    </MyForm>
  );
}

SearchBar.propTypes = {
  setParams: PropTypes.func.isRequired,
  setDispatch: PropTypes.func.isRequired,
};
