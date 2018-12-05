import React from 'react';
import ResultBar from './ResultBar/ResultBar';
import NumberButtons from './Buttons/NumberButtons';
import ClearButton from './Buttons/ClearButton';
import OperatorButtons from './Buttons/OperatorButtons';

class App extends React.Component {
  state = {
    value: 0,
    result: 0,
    valuesArr: [],
    operatorsArr: []
  }

  onInputChange = value => {
    this.setState({ value });
  }

  onNumberClick = value => {
    if (this.state.value === 0) {
      this.setState({ value });
    } else {
      this.setState({ value: this.state.value.toString() + value.toString() });
    }
  }

  onOperatorClick = operator => {
    const { result, value, valuesArr, operatorsArr } = this.state;
    this.setState({
      valuesArr: [...valuesArr, value],
      operatorsArr: [...operatorsArr, operator],
      result: value,
      value: 0
    });
    for (let i = valuesArr.length; i <= valuesArr.length; i++) {
      if (i > 0) {
        switch (operatorsArr[i - 1]) {
          case '+':
            this.setState({ result: result + Number(value), value: 0 });
            break;
          case '-':
            this.setState({ result: result - Number(value), value: 0 });
            break;
          case '*':
            this.setState({ result: result * Number(value), value: 0 });
            break;
          case '/':
            this.setState({ result: result / Number(value), value: 0 });
            break;
          case '=':
            this.setState({ result });
            break;
          default: console.log('HOW HAVE YOU DONE THIS?!')
        }
      }
    }
  }

  onClearClick = () => {
    this.setState({ value: 0, result: 0, valuesArr: [], operatorsArr: [] });
  }

  render() {
    return (
      <div>
        <ResultBar
          value={this.state.value}
          result={this.state.result}
          onInputChange={this.onInputChange}
        />
        <NumberButtons onNumberClick={this.onNumberClick} />
        <ClearButton onClearClick={this.onClearClick} />
        <OperatorButtons onOperatorClick={this.onOperatorClick} />
      </div>
    )
  }
}

export default App;