import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';

const styles = theme => ({
  root: {
    border: `${theme.typography.pxToRem(1)} solid #dae4ee`,
  },
});

class Card extends Component {
  render() {
    const { classes, children, ...other } = this.props;

    return (
      <MuiCard square elevation={0} classes={classes} {...other}>
        {children}
      </MuiCard>
    );
  }
}

export default withStyles(styles)(Card);
