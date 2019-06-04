import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
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
      }).isRequired
    ),
  };

  render() {
    const { items, classes, ...other } = this.props;

    return (
      <Grid container spacing={8} {...other}>
        {items.map((item, index) => (
          <Grid item xs className={classes.gridItem} key={index}>
            <ListItem to={item.href}>{item.label}</ListItem>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(ListOfLinks);
