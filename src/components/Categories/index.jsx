/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
import React from 'react';

import * as dadosToSave from '../../services/card';
import * as dadosCategories from '../../services/categories';
import './styles.css';

export default function Categories({ dados, changeDados }) {
  const savedDados = dadosToSave.cards;
  const handleSearch = (value) => {
    if (value === 0) { return repair(); }
    const result = savedDados.filter((dado) => dado.categories === value);
    changeDados(result);
  };
  const repair = () => {
    if (savedDados.length > dados.length) {
      changeDados(savedDados);
    }
  };
  return (
    <div className="categories-container">
      <div className="categories-title">
        <h1>
          CATEGORIAS
        </h1>
      </div>
      <div className="list-container">
        {
          dadosCategories.categories.map((category) => (
            <button
              onClick={() => handleSearch(category.categories)}
              type="button"
              className="categories"
              key={category.key}
            >
              <p>{category.name}</p>
            </button>
          ))
      }
      </div>
    </div>
  );
}
