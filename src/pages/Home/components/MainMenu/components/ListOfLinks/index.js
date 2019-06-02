import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl.macro';
import ListItem from './ListItem';

const styles = {
  gridItem: {
    textAlign: 'center',
  },
};

class ListOfLinks extends Component {
  render() {
    const { classes, ...other } = this.props;

    return (
      <Grid container spacing={8} {...other}>
        <Grid item xs className={classes.gridItem}>
          <ListItem href={'#'}>
            <FormattedMessage id={'MainMenu.Menu1'} defaultMessage="Articles" />
          </ListItem>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <ListItem href={'/contact'}>
            <FormattedMessage id={'MainMenu.Menu2'} defaultMessage="News" />
          </ListItem>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <ListItem href={'#'}>
            <FormattedMessage id={'MainMenu.Menu3'} defaultMessage="Events" />
          </ListItem>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <ListItem href={'#'}>
            <FormattedMessage id={'MainMenu.Menu4'} defaultMessage="Quality manual" />
          </ListItem>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ListOfLinks);
