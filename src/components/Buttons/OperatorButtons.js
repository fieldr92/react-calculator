import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import buttons from '../../styles/buttons';

const styles = {
  root: {
    ...buttons.root,
    width: 50
  }
};

const createButtons = ({ onOperatorClick, classes }) => {
  const operators = ['+', '-', '/', '*', '='];
  return operators.map(operator => {
    return <Button
      variant="outlined"
      color="primary"
      key={`numKey${operator}`}
      onClick={() => onOperatorClick(operator)}
      classes={{ root: classes.root }}
    >
    {operator}
    </Button>
  })
}

const OperatorButtons = props => {
  return (
    <div>
      {createButtons(props)}
    </div>
  )
}

export default withStyles(styles)(OperatorButtons);