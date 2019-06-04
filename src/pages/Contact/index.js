import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Contact extends Component {
  render() {
    const { staticContext, ...other } = this.props;
    return (
      <Typography variant={'h4'} {...other}>
        Contact Page
      </Typography>
    );
  }
}

export default Contact;
