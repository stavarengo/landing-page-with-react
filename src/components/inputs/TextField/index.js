import React, { Component } from 'react';
import BaseTextField from '../BaseTextField';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  input: {
    paddingTop: theme.typography.pxToRem(10),
    paddingBottom: theme.typography.pxToRem(10),
  },
});

class TextField extends Component {
  render() {
    const { classes, ...other } = this.props;

    return <BaseTextField classes={classes} {...other} />;
  }
}

export default withStyles(styles)(injectIntl(TextField));
