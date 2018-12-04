import React from 'react';
import Button from './Button';

const ClearButton = props => {
  return(
    <div>
      <Button
        onButtonClick={props.onClearClick}
        value="CLEAR"
      />
    </div>
  )
}

export default ClearButton;