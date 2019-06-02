import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl.macro';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth/withWidth';
import ListItem from './ListItem';

const styles = {
  gridItem: {
    textAlign: 'center',
  },
};

class ListOfLinks extends Component {
  render() {
    const { classes, width: screenWidth, ...other } = this.props;

    return (
      <Grid container spacing={isWidthUp('md', screenWidth) ? 6 : 1} {...other}>
        <Grid item xs className={classes.gridItem}>
          <ListItem href={'#'}>
            <FormattedMessage id={'Institutional.Menu1'} defaultMessage="Groups" />
          </ListItem>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <ListItem href={'/contact'}>
            <FormattedMessage id={'Institutional.Menu2'} defaultMessage="Contact" />
          </ListItem>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <ListItem href={'#'}>
            <FormattedMessage id={'Institutional.Menu3'} defaultMessage="FAQ" />
          </ListItem>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <ListItem href={'#'}>
            <FormattedMessage id={'Institutional.Menu4'} defaultMessage="Facebook" />
          </ListItem>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <ListItem href={'#'}>
            <FormattedMessage id={'Institutional.Menu5'} defaultMessage="Microblog" />
          </ListItem>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <ListItem href={'#'}>
            <FormattedMessage id={'Institutional.Menu6'} defaultMessage="About us" />
          </ListItem>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(withWidth()(ListOfLinks));
