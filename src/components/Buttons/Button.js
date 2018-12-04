import React from 'react';

const Button = ({ value, onButtonClick }) => {
    return (
      <button onClick={() => onButtonClick(value)}>
        {value}
      </button>
    )
}

export default Button;