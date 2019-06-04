import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';

export default class Link extends Component {
  render() {
    const { ...other } = this.props;

    return <MuiLink component={RouterLink} {...other} />;
  }
}
