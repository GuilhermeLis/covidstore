/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';

import Button from '../Button';

import * as dadosToSave from '../../services/card';
import * as dadosCategories from '../../services/categories';
import './styles.css';

export default function Categories({ dados, changeDados }) {
  const [theLast, setTheLast] = useState(0);
  const savedDados = dadosToSave.cards;
  const handleSearch = (value) => {
    if (value === theLast) { return repair(); }
    setTheLast(value);
    const result = savedDados.filter((dado) => dado.categories === value);
    changeDados(result);
  };
  const repair = () => {
    if (savedDados.length > dados.length) {
      changeDados(savedDados);
      setTheLast(0);
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
            <Button
              click={() => handleSearch(category.categories)}
              name={category.name}
              key={category.key}
              search={theLast}
              id={category.categories}
            />
          ))
      }
      </div>
    </div>
  );
}
