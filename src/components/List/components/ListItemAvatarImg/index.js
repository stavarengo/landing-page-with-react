import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ListItemAvatarBase from '../ListItemAvatarBase';
import Avatar from './Avatar';
import { PropTypes } from 'prop-types';

const styles = {
  root: {
    width: props => props.width || ListItemAvatarImg.defaultProps.width,
    height: props => props.height || ListItemAvatarImg.defaultProps.height,
  },
};

class ListItemAvatarImg extends Component {
  static defaultProps = {
    width: 'auto',
    height: 'auto',
  };

  static propTypes = {
    /**
     * The image to be show.
     */
    src: PropTypes.string.isRequired,
    /**
     * The width of avatar element.
     * The image inside the avatar not be resized at all.
     * Normally this will be the biggest width you found in all your avatars.
     *
     * This property helps when you have a list of items with avatars of different widths, so you
     * set the same value for this property in all of the items to make sure they will use the
     * same space across the list.
     */
    width: PropTypes.number,
    /**
     * @see ListItemAvatarImg.propTypes.width
     */
    height: PropTypes.number,
  };

  render() {
    const { src, height, width, classes, ...other } = this.props;

    return (
      <ListItemAvatarBase classes={classes} {...other}>
        <Avatar src={src} />
      </ListItemAvatarBase>
    );
  }
}

export default withStyles(styles)(ListItemAvatarImg);
