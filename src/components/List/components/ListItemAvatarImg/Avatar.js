import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import MuiAvatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    borderRadius: 0,
    width: '100%',
    height: '100%',
  },
  img: {
    objectFit: 'none',
  },
};

class Avatar extends Component {
  render() {
    const { classes, ...other } = this.props;

    return <MuiAvatar classes={classes} {...other} />;
  }
}

export default withStyles(styles)(Avatar);
