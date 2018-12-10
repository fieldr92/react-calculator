import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import buttons from '../../../styles/buttons';

const styles = {
  root: {
    ...buttons.root,
    width: '100%',
    borderRadius: '0 0 4px 4px'
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
      {"CLEAR"}
      </Button>
    </Grid>
  )
};

export default withStyles(styles)(ClearButton);