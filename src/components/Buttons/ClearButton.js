import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import buttons from '../../styles/buttons';

const styles = {
  root: {
    ...buttons.root,
    width: 128
  }
};

const ClearButton = ({ onClearClick, classes }) => {
  return(
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => onClearClick()}
        classes={{ root: classes.root }}
      >
      {"CLEAR"}
      </Button>
    </div>
  )
}

export default withStyles(styles)(ClearButton);