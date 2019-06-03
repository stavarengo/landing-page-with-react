import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';

const styles = {
  root: {
    border: '1px solid #dae4ee',
  },
};

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
