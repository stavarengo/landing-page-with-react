import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class TelephoneBook extends Component {
  render() {
    const { ...other } = this.props;

    return <Typography {...other}>TELEPHONE BOOK</Typography>;
  }
}

export default TelephoneBook;
