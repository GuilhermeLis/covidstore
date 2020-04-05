/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';

import './styles.css';

export default function Button({ click, name }) {
  const [holdPress, setHoldPress] = useState('');
  const handleClick = () => {
    (holdPress === '') ? setHoldPress('categories-active') : setHoldPress('');
    const disable = click();
    disable ? setHoldPress('') : null;
    console.log(disable);
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`categories ${holdPress}`}
    >
      <p>{name}</p>
    </button>
  );
}
