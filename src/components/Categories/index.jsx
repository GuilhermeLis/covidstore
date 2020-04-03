import React from 'react';


import * as dados from '../../services/categories';
import './styles.css';

export default function Categories() {
  return (
    <div className="categories-container">
      <div className="categories-title">
        <h1>
          CATEGORIAS
        </h1>
      </div>
      <div className="list-container">
        {
          dados.categories.map((category) => (
            <div
              className="categories"
              key={category.key}
            >
              <p>{category.name}</p>
            </div>
          ))
      }
      </div>
    </div>
  );
}
