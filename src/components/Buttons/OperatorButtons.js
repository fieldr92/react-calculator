import React from 'react';
import Button from './Button';

class OperatorButtons extends React.Component {
  
  createButtons() {
    const operators = ['+', '-', '/', '*', '='];
    return operators.map(operator => {
      return <Button
        key={`numKey${operator}`}
        value={operator}
        onButtonClick={this.props.onOperatorClick}
      />
    })
  }

  render() {
    return(
      <div>
        {this.createButtons()}
      </div>
    )
  }
}

export default OperatorButtons;