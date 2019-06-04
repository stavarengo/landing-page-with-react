import React, { Component } from 'react';
import InstitutionalMenu from './components/InstitutionalMenu';
import Grid from '@material-ui/core/Grid';
import SectionBetweenInstitutionalMenuAndTheMainMenu from './components/SectionBetweenInstitutionalMenuAndTheMainMenu';
import MainMenu from './components/MainMenu';
import Box from '@material-ui/core/Box';
import DrawerMenu from './components/DrawerMenu';
import { isWidthDown } from '@material-ui/core/withWidth';
import withWidth from '@material-ui/core/withWidth';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import Loading from '../components/Loading';
import availableLanguages from '../services/availableLanguages';
import allMenuItems from './components/services/allMenuItems';
import { injectIntl } from 'react-intl';

const AsyncHome = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});
const AsyncContact = Loadable({
  loader: () => import('./Contact'),
  loading: Loading,
});
const AsyncNotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading,
});

const mapMenuItems = (items, match) =>
  items.map(({ label, href }) => ({
    label,
    href: `${match.url.replace(/\/$/, '')}/${href.replace(/^\//, '')}`,
  }));

class Home extends Component {
  state = {
    isDrawerOpen: false,
  };
  render() {
    const { match, intl, staticContext, width: screenWidth, ...other } = this.props;

    const contentSize = { xs: 12, md: 11, lg: 10 };
    const renderMenuSandwich = isWidthDown('sm', screenWidth);
    const mainMenuItems = mapMenuItems(allMenuItems(intl).mainMenu, match);
    const institutionalMenuItems = mapMenuItems(allMenuItems(intl).institutionalMenu, match);

    let matchUrl = match.url.replace(/\/\$/, '');

    return (
      <Grid container justify={'center'} {...other}>
        <Grid item xs={12}>
          {/*<ScreenSize style={{ position: 'fixed', top: '185px', left: '30px', zIndex: 10000000 }} />*/}

          {renderMenuSandwich && (
            <DrawerMenu
              open={this.state.isDrawerOpen}
              onClose={this.onDrawerClose.bind(this)}
              mainMenuItems={mainMenuItems}
              secondaryMenuItems={institutionalMenuItems}
            />
          )}
          <Grid container justify={'center'}>
            <Grid item {...contentSize}>
              <InstitutionalMenu
                onSandwichMenuClick={this.onSandwichMenuClick.bind(this)}
                renderMenuSandwich={renderMenuSandwich}
                languages={availableLanguages().map(({ label, url }) => {
                  return {
                    label,
                    url: `/${url}`,
                  };
                })}
                items={renderMenuSandwich ? null : institutionalMenuItems}
              />
              <Box my={3} px={1}>
                <SectionBetweenInstitutionalMenuAndTheMainMenu href={matchUrl} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box py={4} px={1} mt={1} clone>
            <MainMenu
              items={renderMenuSandwich ? null : mainMenuItems}
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
                <Switch>
                  <Route path={`${matchUrl}/`} exact component={AsyncHome} />
                  <Route path={`${matchUrl}/contact`} exact component={AsyncContact} />
                  <Route component={AsyncNotFound} />
                </Switch>
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

export default injectIntl(withWidth()(Home));
