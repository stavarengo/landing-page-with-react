import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth/withWidth';
import ListOfLinks from './components/ListOfLinks';
import ListOfIcons from './components/ListOfIcons';

export class InstitutionalMenu extends Component {
  render() {
    const { width: screenWidth, ...other } = this.props;

    return (
      <Box borderBottom={1} borderColor={'#ebf0f4'} clone p={1}>
        <Grid container alignItems={'center'} {...other}>
          <Hidden xsDown>
            <Grid item>
              <ListOfLinks />
            </Grid>
          </Hidden>
          <Grid item xs spacing={isWidthUp('md', screenWidth) ? 2 : 1}>
            <ListOfIcons justify={'flex-end'} />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withWidth()(InstitutionalMenu);
