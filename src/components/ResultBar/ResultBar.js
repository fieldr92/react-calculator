import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    borderRadius: 0,
    width: '100%'
  }
};

const extractNums = str => {
  const regex = /[0-9]*/;
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
        <TextField
          label="Result"
          margin="normal"
          variant="outlined"
          color="primary"
          value={inputValueHandler(value, result)}
          onChange={e => onInputChange(extractNums(e.target.value))}
          onClick={e => e.target.select()}
          classes={{ root: classes.roots }}
        />
      </form>
    </Grid>
  )
};

export default withStyles(styles)(ResultBar);