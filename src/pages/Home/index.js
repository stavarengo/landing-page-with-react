import React, { Component } from 'react';
import InstitutionalMenu from './components/InstitutionalMenu';
import ScreenSize from '../../components/dev/ScreenSize';
import Grid from '@material-ui/core/Grid';
import SectionBetweenInstitutionalMenuAndTheMainMenu from './components/SectionBetweenInstitutionalMenuAndTheMainMenu';
import MainMenu from './components/MainMenu';
import Box from '@material-ui/core/Box';
import DrawerMenu from './components/DrawerMenu';
import { isWidthDown } from '@material-ui/core/withWidth';
import withWidth from '@material-ui/core/withWidth';
import Content from './components/Content';

class Home extends Component {
  state = {
    isDrawerOpen: false,
  };
  render() {
    const { staticContext, width: screenWidth, ...other } = this.props;

    const contentSize = { xs: 12, md: 11, lg: 10 };
    const renderMenuSandwich = isWidthDown('sm', screenWidth);

    return (
      <Grid container justify={'center'} {...other}>
        <Grid item xs={12}>
          <ScreenSize style={{ position: 'fixed', top: '185px', left: '30px', zIndex: 10000000 }} />

          {renderMenuSandwich && <DrawerMenu open={this.state.isDrawerOpen} onClose={this.onDrawerClose.bind(this)} />}
          <Grid container justify={'center'}>
            <Grid item {...contentSize}>
              <InstitutionalMenu
                onSandwichMenuClick={this.onSandwichMenuClick.bind(this)}
                renderMenuSandwich={renderMenuSandwich}
              />
              <Box my={3} px={1}>
                <SectionBetweenInstitutionalMenuAndTheMainMenu />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box py={4} px={1} mt={1} clone>
            <MainMenu
              renderListOfMenuItems={!renderMenuSandwich}
              contentItemProps={{
                ...contentSize,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify={'center'}>
            <Grid item {...contentSize}>
              <Box mt={2}>
                <Content />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  onSandwichMenuClick() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen,
    });
  }

  onDrawerClose() {
    this.setState({
      isDrawerOpen: false,
    });
  }
}

export default withWidth()(Home);
