import React, { Component } from 'react';
import MuiList from '@material-ui/core/List';

class List extends Component {
  render() {
    const { children, ...other } = this.props;

    return <MuiList {...other}>{children}</MuiList>;
  }
}

export default List;
