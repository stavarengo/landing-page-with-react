import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from './ListItem';
import allMenuItems from '../../../../services/allMenuItems';
import { injectIntl } from 'react-intl';

const styles = {
  gridItem: {
    textAlign: 'center',
  },
};

class ListOfLinks extends Component {
  render() {
    const { intl, classes, ...other } = this.props;

    return (
      <Grid container spacing={8} {...other}>
        {allMenuItems(intl).mainMenu.map((item, index) => (
          <Grid item xs className={classes.gridItem} key={index}>
            <ListItem to={item.href}>{item.label}</ListItem>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default injectIntl(withStyles(styles)(ListOfLinks));
