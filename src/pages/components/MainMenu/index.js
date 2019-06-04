import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ListOfLinks from './components/ListOfLinks';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth/withWidth';
import SearchTextArea from '../../../components/inputs/SearchTextField';

const styles = {
  root: {
    backgroundColor: '#9e419c',
  },
};

class MainMenu extends Component {
  static propTypes = {
    /**
     * Properties for the {@link Grid} (with `item` true) that holds all the element of this
     * component.
     */
    contentItemProps: PropTypes.object,
    /**
     * List of items to display in the menu.
     * If `null`, only the search text box will be rendered.
     *
     * @see ListOfLinks.propTypes.items
     */
    items: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { contentItemProps, items, className, classes, width: screenWidth, ...other } = this.props;

    let spacing = 1;
    if (items) {
      if (isWidthUp('xl', screenWidth)) {
        spacing = 10;
      } else if (isWidthUp('lg', screenWidth)) {
        spacing = 8;
      } else if (isWidthUp('md', screenWidth)) {
        spacing = 6;
      } else if (isWidthUp('sm', screenWidth)) {
        spacing = 4;
      }
    }

    return (
      <Grid container className={clsx(classes.root, className)} {...other} justify={'center'}>
        <Grid item {...contentItemProps}>
          <Grid container alignItems={'center'}>
            {items ? (
              <Grid item>
                <ListOfLinks spacing={spacing} items={items} />
              </Grid>
            ) : null}
            <Grid item xs>
              <Grid container justify={items ? 'flex-end' : 'center'}>
                <Grid item xs sm={8} md={8} lg={7} xl={6}>
                  <SearchTextArea fullWidth showDefaultPlaceholder={!items} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(withWidth()(MainMenu));
