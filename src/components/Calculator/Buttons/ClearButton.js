import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import buttons from '../../../styles/buttons';
import '../../../styles/App.css';

const styles = {
  root: {
    ...buttons.root,
    borderRadius: '0 0 3px 3px',
    color: '#f50057'
  }
};

const ClearButton = ({ onClearClick, classes }) => {
  return (
    <Grid item xs={12}>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => onClearClick()}
        classes={{ root: classes.root }}
      >
      CLEAR
      </Button>
    </Grid>
  )
};

export default withStyles(styles)(ClearButton);