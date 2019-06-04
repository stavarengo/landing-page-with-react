import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth/withWidth';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

const styles = {
  gridItem: {
    textAlign: 'center',
  },
};

class ListOfLinks extends Component {
  static propTypes = {
    /**
     * List of items to display in the menu.
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Label of the menu.
         * This text will be shown to the user.
         */
        label: PropTypes.string.isRequired,
        /**
         * The URL to where the user will be redirect when he click in the menu.
         */
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { items, classes, width: screenWidth, ...other } = this.props;

    return (
      <Grid container spacing={isWidthUp('md', screenWidth) ? 6 : 1} {...other}>
        {items.map((item, index) => (
          <Grid item xs className={classes.gridItem} key={index}>
            <ListItem to={item.href}>{item.label}</ListItem>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(withWidth()(ListOfLinks));
