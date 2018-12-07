import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import buttons from '../../styles/buttons';

const styles = {
  root: {
    ...buttons.root,
    width: '100%',
    height: 50
  }
};

const createButtons = ({ onOperatorClick, classes }) => {
  const operators = ['+', '-', '/', '*', '='];
  return operators.map(operator => {
    return (
      <Grid item xs={3} key={`numKey${operator}`}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => onOperatorClick(operator)}
          classes={{ root: classes.root }}
        >
        {operator}
        </Button>
      </Grid>
    )
  })
};

const OperatorButtons = props => {
  return <>{createButtons(props)}</>
};

export default withStyles(styles)(OperatorButtons);