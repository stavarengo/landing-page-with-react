import React, { Component } from 'react';
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    boxShadow: 'none !important',
    padding: `${theme.typography.pxToRem(6)} ${theme.typography.pxToRem(40)}`,
  },
  sizeSmall: {
    // padding: '4px 8px',
    fontSize: theme.typography.pxToRem(15),
  },
  sizeLarge: {
    // padding: '8px 24px',
    fontSize: theme.typography.pxToRem(17),
  },
  // contained: {
  //   boxShadow: theme.shadows[2],
  //   '&$focusVisible': {
  //     boxShadow: theme.shadows[6]
  //   },
  //   '&:active': {
  //     boxShadow: theme.shadows[8]
  //   },
  //   '&$disabled': {
  //     boxShadow: theme.shadows[0],
  //   },
  // },
});

class Button extends Component {
  render() {
    const { classes, ...other } = this.props;

    return <MuiButton classes={classes} {...other} />;
  }
}

export default withStyles(styles)(Button);
