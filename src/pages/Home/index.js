import React, { Component } from 'react';
import InstitutionalMenu from './components/InstitutionalMenu';
import ScreenSize from '../../components/dev/ScreenSize';
import Grid from '@material-ui/core/Grid';
import SectionBetweenInstitutionalMenuAndTheMainMenu from './components/SectionBetweenInstitutionalMenuAndTheMainMenu';
import MainMenu from './components/MainMenu';
import Box from '@material-ui/core/Box';

class Home extends Component {
  render() {
    const { staticContext, ...other } = this.props;

    const contentSize = { xs: 12, md: 11, lg: 10 };

    return (
      <Grid container justify={'center'} {...other}>
        <Grid item xs={12}>
          <ScreenSize style={{ position: 'fixed', top: '300px', left: '30px' }} />

          <Grid container justify={'center'}>
            <Grid item {...contentSize}>
              <InstitutionalMenu />
              <Box my={3}>
                <SectionBetweenInstitutionalMenuAndTheMainMenu />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box py={4} px={1} mt={1} clone>
            <MainMenu
              contentItemProps={{
                ...contentSize,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
