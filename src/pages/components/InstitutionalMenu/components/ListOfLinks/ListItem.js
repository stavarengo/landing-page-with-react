import React, { Component } from 'react';
import Link from '../../../../../components/Link';

class ListItem extends Component {
  render() {
    const { children, ...other } = this.props;

    return (
      <Link noWrap color={'textPrimary'} {...other}>
        {children}
      </Link>
    );
  }
}

export default ListItem;
