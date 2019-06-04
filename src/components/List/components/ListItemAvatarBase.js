import React, { Component } from 'react';
import MuiListItemAvatar from '@material-ui/core/ListItemAvatar';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    marginRight: props => theme.spacing(props.marginRight || ListItemAvatarBase.defaultProps.marginRight),
  },
});

class ListItemAvatarBase extends Component {
  static defaultProps = {
    marginRight: 6,
  };

  static propTypes = {
    /**
     * Size of the right margin of the root element.
     */
    marginRight: PropTypes.number,
  };

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
