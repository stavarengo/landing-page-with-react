import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '1rem',
  },
});

class ListItem extends Component {
  render() {
    const { children, className, classes, ...other } = this.props;

    return (
      <Link noWrap className={clsx(classes.root, className)} {...other}>
        {children}
      </Link>
    );
  }
}

export default withStyles(styles)(ListItem);
