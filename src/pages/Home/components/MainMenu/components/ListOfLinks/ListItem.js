import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Link from '../../../../../../components/Link';

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
