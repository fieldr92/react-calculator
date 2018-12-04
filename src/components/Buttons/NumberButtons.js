import React from 'react';
import Button from './Button.js';

class NumberButtons extends React.Component {

  createButtons() {
    let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
    return numbers.map(number => {
      return <Button
        key={`numKey${number}`}
        value={number}
        onButtonClick={this.props.onNumberClick}
      />
    });
  }

  render() {
    return (
      <div className="num-buttons">
        <div className="grid-items">
          {this.createButtons()}
        </div>
      </div>
    )
  }
}

export default NumberButtons;