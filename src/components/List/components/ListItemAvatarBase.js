import React, { Component } from 'react';
import MuiListItemAvatar from '@material-ui/core/ListItemAvatar';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    marginRight: theme.spacing(6),
  },
});

class ListItemAvatarBase extends Component {
  render() {
    const { children, classes, ...other } = this.props;

    return (
      <MuiListItemAvatar classes={classes} {...other}>
        {children}
      </MuiListItemAvatar>
    );
  }
}

export default withStyles(styles)(ListItemAvatarBase);
