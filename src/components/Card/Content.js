import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';

class Content extends Component {
  render() {
    const { classes, children, ...other } = this.props;

    return (
      <CardContent classes={classes} {...other}>
        {children}
      </CardContent>
    );
  }
}

export default Content;
