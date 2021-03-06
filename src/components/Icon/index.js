import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import clsx from 'clsx';

const styles = theme => ({
  root: {
    backgroundColor: props => props.backgroundColor || Icon.defaultProps.backgroundColor,
    padding: theme.spacing(1.2),
    display: 'inline-block',
  },
  avatar: {
    borderRadius: 0,
    width: props => theme.spacing(props.size || Icon.defaultProps.size),
    height: props => theme.spacing(props.size || Icon.defaultProps.size),
  },
});

class Icon extends Component {
  static defaultProps = {
    size: 3,
    backgroundColor: '#e5f0fa',
  };

  static propTypes = {
    /**
     * An SVG icon URL.
     * The SVG elements should be scaled for a 24x24px viewport.
     */
    icon: PropTypes.string.isRequired,
    /**
     * The size of the icon.
     * The number set here will be passed to the function {@link https://material-ui.com/customization/spacing }.
     */
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Properties applied to the {@link Badge} element.
     * If null, no Badge will be rendered.
     */
    badgeProps: PropTypes.object,
    /**
     * Background color of the search icon.
     */
    backgroundColor: PropTypes.string,
  };

  render() {
    const { classes, className, icon, backgroundColor, badgeProps, ...other } = this.props;

    let badge = this.getBadge(<Avatar className={classes.avatar} src={icon} />, badgeProps);

    return (
      <div className={clsx(classes.root, className)} {...other}>
        {badge}
      </div>
    );
  }

  getBadge(icon, badgeProps) {
    if (badgeProps) {
      return <Badge {...badgeProps}>{icon}</Badge>;
    }

    return icon;
  }
}

export default withStyles(styles)(Icon);
