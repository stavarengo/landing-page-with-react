import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth/withWidth';
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
    const { intl, classes, width: screenWidth, ...other } = this.props;

    return (
      <Grid container spacing={isWidthUp('md', screenWidth) ? 6 : 1} {...other}>
        {allMenuItems(intl).institutionalMenu.map((item, index) => (
          <Grid item xs className={classes.gridItem} key={index}>
            <ListItem href={item.href}>{item.label}</ListItem>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default injectIntl(withStyles(styles)(withWidth()(ListOfLinks)));
