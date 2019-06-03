import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Accordion from './components/Accordion';
import DirectlyTo from './components/DirectlyTo';
import TelephoneBook from './components/TelephoneBook';
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
import { isWidthDown } from '@material-ui/core/withWidth';

const allCards = {
  xsUp: [
    [Accordion, DirectlyTo, Events, Blogs, News, Polls, MyLinks],
    [TelephoneBook, QualityManual, MyGroups, Microblog, AddWidget],
  ],
  mdUp: [
    [Accordion, Events, News, AddWidget],
    [DirectlyTo, Blogs, QualityManual, Polls, MyLinks],
    [TelephoneBook, Microblog, MyGroups],
  ],
};

class Content extends Component {
  render() {
    const { width: screenWidth, ...other } = this.props;

    let cardsToShow = allCards.mdUp;
    if (isWidthDown('md', screenWidth)) {
      cardsToShow = allCards.xsUp;
    }

    return (
      <Box px={1}>
        <Grid container spacing={3} {...other}>
          {cardsToShow.map((cards, columnIndex) => (
            <Grid item xs={12} sm={6} md={4} key={columnIndex}>
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
