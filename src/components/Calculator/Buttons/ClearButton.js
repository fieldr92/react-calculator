import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import buttons from '../../../styles/buttons';

const styles = {
  root: {
    ...buttons.root,
    width: '100%'
  }
};

const ClearButton = ({ onClearClick, classes }) => {
  return (
    <Grid item xs={4}>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => onClearClick()}
        classes={{ root: classes.root }}
      >
      {"C"}
      </Button>
    </Grid>
  )
};

export default withStyles(styles)(ClearButton);