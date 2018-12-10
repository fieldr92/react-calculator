import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import buttons from '../../../styles/buttons';

const styles = {
  root: {
    ...buttons.root,
    width: '100%',
    color: 'white'
  }
};

const createButtons = ({ onNumberClick, classes }) => {
  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
  return numbers.map(number => {
    return (
      <Grid item xs={4} key={`numKey${number}`}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => onNumberClick(number)}
          classes={{ root: classes.root }}
        >
        {number}
        </Button>
      </Grid>
    )
  });
};

const NumberButtons = props => {
  return <>{createButtons(props)}</>
};

export default withStyles(styles)(NumberButtons);