import React from 'react';
import ResultBar from './ResultBar/ResultBar';
import NumberButtons from './Buttons/NumberButtons';
import ClearButton from './Buttons/ClearButton';
import OperatorButtons from './Buttons/OperatorButtons';

class App extends React.Component {
  state = {
    value: 0,
    operator: null,
    result: 0
  }

  onInputChange = value => {
    this.setState({ value });
  }

  onNumberClick = value => {
    if (this.state.value === 0) {
      this.setState({ value });
    } else {
      const newValue = this.state.value.toString() + value.toString();
      this.setState({ value: Number(newValue) });
    }
  }

  onOperatorClick = operator => {
    this.setState({
      result: Number(this.state.value),
      value: 0
    });
    this.evaluateAnswer(this.state.result, operator);
  }

  evaluateAnswer(prev, operator) {
    if (operator !== '=' || operator === 'null') {
      const result = eval(`${prev}${operator}${this.state.value}`);
      this.setState({
        result,
        operator
      });
      console.log(result);
    } else {
      const result = eval(`${prev}${this.state.operator}${this.state.value}`);
      console.log(result);
      this.setState({ result: prev, value: result, operator: null });
    }
  }

  onClearClick = () => {
    this.setState({ value: 0, result: 0 });
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