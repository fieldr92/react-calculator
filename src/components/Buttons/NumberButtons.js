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

const createButtons = ({ onNumberClick, classes }) => {
  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
  return numbers.map(number => {
    return <Button
      variant="outlined"
      color="primary"
      key={`numKey${number}`}
      onClick={() => onNumberClick(number)}
      classes={{ root: classes.root }}
    >
    {number}
    </Button>
  });
}

const NumberButtons = props => {
  return (
    <div>
      {createButtons(props)}
    </div>
  )
}

export default withStyles(styles)(NumberButtons);