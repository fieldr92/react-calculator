import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green';
import buttons from '../../../styles/buttons';

const styles = {
  root: {
    ...buttons.root,
    width: '100%',
    color: 'white',
    // border: '1px solid #00b16a50'
  },
  palette: {
    primary: green
  }
};

const createButtons = ({ onOperatorClick, classes }) => {
  const operators = [ '=', '+', '-', '/', '*' ];
  return operators.map(operator => {
    let opStyle = { xs: 3, color: 'primary' };
    if (operator === '=') {
      opStyle.xs = 12;
      opStyle.color = 'primary'
    }
    return (
      <Grid item xs={opStyle.xs} key={`numKey${operator}`}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => onOperatorClick(operator)}
          classes={{ root: classes.root }}
        >
        {operator}
        </Button>
      </Grid>
    );
  });
};

const OperatorButtons = props => {
  return <>{createButtons(props)}</>
};

export default withStyles(styles)(OperatorButtons);