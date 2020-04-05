/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';

import './styles.css';

export default function Button({
  click, name, search, id,
}) {
  const [holdPress, setHoldPress] = useState('');

  useEffect(() => {
    (id === search) ? setHoldPress('categories-active') : setHoldPress('');
  }, [search]);
  return (
    <button
      onClick={click}
      type="button"
      className={`categories ${holdPress}`}
    >
      <p>{name}</p>
    </button>
  );
}
