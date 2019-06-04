import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Accordion from './components/Accordion';
import DirectlyTo from './components/DirectlyTo';
import Index from './components/TelephoneBook';
import Events from './components/Events';
import Blogs from './components/Blogs';
import Microblog from './components/Microblog';
import News from './components/News';
import QualityManual from './components/QualityManual';
import AddWidget from './components/AddWidget';
import Polls from './components/Polls';
import MyGroups from './components/MyGroups';
import MyLinks from './components/MyLinks';
import Box from '@material-ui/core/Box';
import { withWidth } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';

const allCards = {
  xsUp: [
    [Accordion, DirectlyTo, Events, Blogs, News, Polls, MyLinks],
    [Index, QualityManual, MyGroups, Microblog, AddWidget],
  ],
  mdUp: [
    [Accordion, Events, News, AddWidget],
    [DirectlyTo, Blogs, QualityManual, Polls, MyLinks],
    [Index, Microblog, MyGroups],
  ],
};

class Content extends Component {
  render() {
    const { staticContext, width: screenWidth, ...other } = this.props;

    let cardsToShow = allCards.xsUp;
    let gridCols = { xs: 12 };
    if (isWidthUp('md', screenWidth)) {
      gridCols = { xs: 4 };
      cardsToShow = allCards.mdUp;
    } else if (isWidthUp('sm', screenWidth)) {
      gridCols = { xs: 6 };
    }

    return (
      <Box px={1}>
        <Grid container spacing={3} {...other}>
          {cardsToShow.map((cards, columnIndex) => (
            <Grid item {...gridCols} key={columnIndex}>
              <Grid container spacing={3}>
                {cards.map((Card, rowIndex) => (
                  <Grid item xs={12} key={`${columnIndex}${rowIndex}`}>
                    <Card />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default withWidth()(Content);
