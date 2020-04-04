import React from 'react';
import { FiSearch } from 'react-icons/fi';

import './styles.css';

export default function SearchBar() {
  return (
    <form className="text-container ">
      <span className="iconBtn">
        <FiSearch color="#808080" />
      </span>
      <input
        type="text"
        className="search"
        placeholder="Pesquise aqui..."
      />
    </form>
  );
}
