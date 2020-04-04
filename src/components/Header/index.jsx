import React from 'react';

import SearchBar from '../SearchBar';
import './styles.css';
import logo from '../../assets/logo.png';

export default function Header() {
  // const getOptionValue = useCallback((option) => option.id, []);
  // const onOptionChange = useCallback(() => [], []);
  // const getOptionLabel = useCallback((option) => `${option.title}`, []);
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
      <SearchBar />
    </div>
  );
}
