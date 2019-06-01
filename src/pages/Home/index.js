import React, { Component } from 'react';
import InstitutionalMenu from './components/InstitutionalMenu';
import ScreenSize from '../../components/dev/ScreenSize';
import Grid from '@material-ui/core/Grid';
import SectionBetweenInstitutionalMenuAndTheMainMenu from './components/SectionBetweenInstitutionalMenuAndTheMainMenu';

class Home extends Component {
  render() {
    const { ...other } = this.props;

    return (
      <Grid container justify={'center'} {...other}>
        <Grid item xs={12} md={11} lg={10}>
          <InstitutionalMenu />
          <SectionBetweenInstitutionalMenuAndTheMainMenu />
          <ScreenSize style={{ position: 'fixed', top: '300px', left: '30px' }} />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
