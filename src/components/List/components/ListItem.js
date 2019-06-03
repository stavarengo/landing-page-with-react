import React, { Component } from 'react';
import MuiListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

class ListItem extends Component {
  render() {
    const { children, classes, ...other } = this.props;

    return (
      <MuiListItem classes={classes} {...other}>
        {children}
      </MuiListItem>
    );
  }
}

export default withStyles(styles)(ListItem);
