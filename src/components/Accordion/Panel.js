import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

const styles = {
  root: {
    border: '1px solid #dae4ee',
    boxShadow: 'none',

    '&:not(:last-child)': {
      borderBottom: 0,
      paddingBottom: '0.3125rem',
    },
    '&:not(:first-child)': {
      borderTop: 0,
    },
    '&:before': {
      backgroundColor: '#fff',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
};

class Panel extends Component {
  render() {
    const { classes, children, ...other } = this.props;

    return (
      <ExpansionPanel square classes={classes} {...other}>
        {children}
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(Panel);
