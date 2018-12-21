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
    backgroundColor: '#f7f1e3',
    border: '1px solid black',
    padding: 1,
    borderRadius: 4
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
    !value ?
      this.setState({ value: 0 }) :
      this.setState({ value });
  }

  onNumberClick = value => {
    this.state.value === 0 ?
      this.setState({ value }) :
      this.setState({ value: this.state.value.toString() + value.toString() });
  }

  onOperatorClick = operator => {
    const { result, value, valuesArr, operatorsArr } = this.state;

    if (operator !== '=') {
      console.log('!== "="', Boolean(value));
      !value ?
        this.setState({
          operatorsArr: [...operatorsArr, operator],
          valuesArr: [...valuesArr, value]
        }) :
        this.setState({
          operatorsArr: [...operatorsArr, operator],
          valuesArr: [...valuesArr, value],
          result: Number(value),
          value: 0
        });
    }

    if (operator === '=') {
      !result ?
        this.setState({
          operatorsArr: [],
          valuesArr: []
        }) :
        this.setState({
          operatorsArr: [],
          valuesArr: [],
          value: 0,
        });
    }

    if (valuesArr.length > 0) {
      this.calculate(operatorsArr.length, value, result, operatorsArr);
    }
  }

  calculate(arrLength, value, result, operatorsArr) {
    switch (operatorsArr[arrLength - 1]) {
      case '+':
      console.log('+');
        this.setState({ result: result + Number(value) });
        break;
      case '-':
      console.log('-');
        this.setState({ result: result - Number(value) });
        break;
      case '*':
      console.log('*');
        this.setState({ result: result * Number(value) });
        break;
      case '/':
      console.log('/');
        this.setState({ result: result / Number(value) });
        break;
      case '=':
        this.setState({ result });
        break;
      default: console.log('Calculation type not found (how did you do this?!)...');
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
    );
  }
}

export default withStyles(styles)(Calculator);