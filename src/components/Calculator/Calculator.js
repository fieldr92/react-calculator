import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ResultBar from './ResultBar/ResultBar';
import NumberButtons from './Buttons/NumberButtons';
import ClearButton from './Buttons/ClearButton';
import OperatorButtons from './Buttons/OperatorButtons';

const styles = {
  container: {
    width: '300px',
    margin: "30px auto",
    backgroundColor: '#222f3e',
    border: '2px solid black',
    padding: 3,
    borderRadius: 5
  }
};

class Calculator extends React.Component {
  state = {
    value: 0,
    result: 0,
    operatorsArr: [],
    valuesArr: [],
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
    if (operator !== '=' && value) {
      this.setState({
        operatorsArr: [...operatorsArr, operator],
        valuesArr: [...valuesArr, value],
        result: Number(value),
        value: 0
      });
    }
    if (operator !== '=' && !value) {
      this.setState({
        operatorsArr: [...operatorsArr, operator],
        valuesArr: [...valuesArr, value]
      });
    }
    if (operator === '=' && result) {
      this.setState({
        operatorsArr: [],
        valuesArr: [],
        value: 0,
      });
    }
    if (operator === '=' && !result) {
      this.setState({
        operatorsArr: [],
        valuesArr: []
      });
    }
    if (valuesArr.length > 0) {
      this.calculate(operatorsArr.length, value, result, operatorsArr);
    }
  }

  calculate(arrLength, value, result, operatorsArr) {
    switch (operatorsArr[arrLength - 1]) {
      case '+':
        this.setState({ result: Number(result) + Number(value) });
        break;
      case '-':
        this.setState({ result: Number(result) - Number(value) });
        break;
      case '*':
        this.setState({ result: Number(result) * Number(value) });
        break;
      case '/':
        this.setState({ result: Number(result) / Number(value) });
        break;
      case '=':
        this.setState({ result: Number(result) });
        break;
      default: console.log('HOW HAVE YOU DONE THIS?!')
    }
  }

  onClearClick = () => {
    this.setState({ value: 0, result: 0, operatorsArr: [], valuesArr: [] });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Grid container className={classes.root} spacing={0}>
          <ResultBar
            value={this.state.value}
            result={this.state.result}
            onInputChange={this.onInputChange}
          />
        </Grid>
        <Grid container className={classes.root} spacing={0}>
          <NumberButtons onNumberClick={this.onNumberClick} />
          <OperatorButtons onOperatorClick={this.onOperatorClick} />
          <ClearButton onClearClick={this.onClearClick} />
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Calculator);