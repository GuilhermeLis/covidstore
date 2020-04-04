/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
import React from 'react';

import SearchBar from '../SearchBar';
import './styles.css';
import logo from '../../assets/logo.png';
import * as dadosToSave from '../../services/card';


export default function Header({ dados, changeDados }) {
  const savedDados = dadosToSave.cards;
  const handleInput = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value === ' ') { return changeDados(savedDados); }
    const result = dados.filter((dado) => dado.title.toLowerCase() === value.toLowerCase());
    result.length ? changeDados(result) : repair();
  };
  const repair = () => {
    if (savedDados.length > dados.length) {
      changeDados(savedDados);
    }
  };
  return (
    <div className="header">
      <div className="header-dados">
        <img src={logo} alt="" />
        <p>
          Google LLC is an American multinational technology
          company that specializes in Internet-related services
          and products, which include online advertising technologies,
          search engine, cloud computing, software.
        </p>
      </div>
      <div className="select" />
      <SearchBar handleInput={handleInput} />
    </div>
  );
}
