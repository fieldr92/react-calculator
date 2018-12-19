import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

const styles = {
  root: {
    borderRadius: 0,
    width: '100%',
    color: 'white'
  },
  input: {
    padding: 20,
    fontSize: 30,
    textAlign: 'right',
    backgroundColor: '#353b48',
    borderRadius: '4px 4px 0 0',
    fontFamily: 'Cutive Mono'
  }
};

const extractNums = str => {
  const regex = /\d*(\.\d*)?/;
  return str.match(regex)[0];
};

const onFormSubmit = e => {
  e.preventDefault();
};

const inputValueHandler = (value, result) => {
  if (!value) return result;
  return value;
};

const ResultBar = ({ onInputChange, value, result, classes }) => {
  return (
    <Grid item xs={12}>
      <form onSubmit={onFormSubmit}>
        <Input
          value={inputValueHandler(value, result)}
          onChange={e => onInputChange(extractNums(e.target.value))}
          onClick={e => e.target.select()}
          classes={{ root: classes.root, input: classes.input }}
        />
      </form>
    </Grid>
  )
};

export default withStyles(styles)(ResultBar);