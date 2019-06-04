import React, { Component } from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    fontSize: '1.125rem',
    paddingRight: 0,
    backgroundColor: '#fff',
    border: `${theme.typography.pxToRem(1)} solid #DAE4EE`,
    '& $notchedOutline': {
      border: 'none',
    },
  },
  notchedOutline: {
    //   borderRadius: 0,
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

class TextField extends Component {
  render() {
    const { classes, InputProps, ...other } = this.props;

    return (
      <MuiTextField
        variant={'outlined'}
        margin={'none'}
        InputProps={{
          classes,
          ...InputProps,
        }}
        {...other}
      />
    );
  }
}

export default withStyles(styles)(TextField);
