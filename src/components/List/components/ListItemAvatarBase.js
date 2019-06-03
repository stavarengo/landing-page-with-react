import React, { Component } from 'react';
import MuiListItemAvatar from '@material-ui/core/ListItemAvatar';

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

export default ListItemAvatarBase;
