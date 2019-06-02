import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ListOfLinks from './components/ListOfLinks';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth/withWidth';
import SearchTextArea from '../../../../components/SearchTextArea';

const styles = {
  root: {
    backgroundColor: '#9e419c',
  },
};

class MainMenu extends Component {
  static propTypes = {
    /**
     * Set if the items of the menu should be rendered.
     * If `false`, only the search text box will be rendered.
     */
    renderListOfMenuItems: PropTypes.bool,
    /**
     * Properties for the {@link Grid} (with `item` true) that holds all the element of this
     * component.
     */
    contentItemProps: PropTypes.object,
  };

  render() {
    const { contentItemProps, renderListOfMenuItems, className, classes, width: screenWidth, ...other } = this.props;

    let spacing = 1;
    if (renderListOfMenuItems) {
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
            {renderListOfMenuItems ? (
              <Grid item>
                <ListOfLinks spacing={spacing} />
              </Grid>
            ) : null}
            <Grid item xs>
              <Grid container justify={renderListOfMenuItems ? 'flex-end' : 'center'}>
                <Grid item xs sm={8} md={8} lg={7} xl={6}>
                  <SearchTextArea fullWidth showDefaultPlaceholder={!renderListOfMenuItems} />
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
