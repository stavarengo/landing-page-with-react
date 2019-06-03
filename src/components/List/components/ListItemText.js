import React, { Component } from 'react';
import MuiListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/styles';

const styles = {
  primary: {
    fontWeight: 700,
  },
};

class ListItemText extends Component {
  render() {
    const { classes, children, ...other } = this.props;

    return (
      <MuiListItemText classes={classes} primaryTypographyProps={{ variant: 'body2' }} {...other}>
        {children}
      </MuiListItemText>
    );
  }
}

export default withStyles(styles)(ListItemText);
