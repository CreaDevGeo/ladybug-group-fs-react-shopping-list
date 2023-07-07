import React from 'react';
import '../Clear/Clear.css';

const Clear = ({ handleClear }) => {
  const handleClick = () => {
    handleClear();
  };

  return <button className="clear-button" onClick={handleClick}>🆑 Clear</button>;
};

export default Clear;

