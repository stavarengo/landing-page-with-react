import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Button, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing(4),
  },
  input: {
    display: 'none',
  },
});

export class RouteExample extends Component {
  render() {
    const {
      staticContext,
      classes,
      ...other /** You must always extract the `...other` values to pass it down in the elements. */
    } = this.props;

    return (
      <div {...other}>
        <Typography variant={'body1'}>Hello</Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          Primary
        </Button>
      </div>
    );
  }
}

export default injectIntl(withStyles(styles)(RouteExample));
