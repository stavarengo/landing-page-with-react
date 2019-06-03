import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing(6),
  },
});

class Summary extends Component {
  render() {
    const { classes, children, ...other } = this.props;

    return (
      <ExpansionPanelDetails classes={classes} {...other}>
        <Typography variant={'body2'}>{children}</Typography>
      </ExpansionPanelDetails>
    );
  }
}

export default withStyles(styles)(Summary);
