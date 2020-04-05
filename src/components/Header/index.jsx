/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
import React from 'react';

import SearchBar from '../SearchBar';
import './styles.css';
import logo from '../../assets/logo.png';
import * as dadosToSave from '../../services/card';


export default function Header({
  dados, changeDados, didntFind, finded, setTheLast,
}) {
  const savedDados = dadosToSave.cards;
  const handleInput = (e) => {
    setTheLast(0);
    e.preventDefault();
    const { value } = e.target;
    if (value === '') { return repair(); }
    const result = savedDados.filter((dado) => dado.title.toLowerCase() === value.toLowerCase());
    result.length ? showResult(result) : changeDados(result); didntFind();
  };
  const showResult = (result) => {
    changeDados(result);
    finded();
  };
  const repair = () => {
    if (savedDados.length > dados.length) {
      changeDados(savedDados);
      finded();
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
