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

const allCards = [
  Accordion,
  DirectlyTo,
  TelephoneBook,
  Events,
  Blogs,
  Microblog,
  News,
  QualityManual,
  AddWidget,
  Polls,
  MyGroups,
  MyLinks,
];

class Content extends Component {
  render() {
    const { ...other } = this.props;

    return (
      <Box px={1}>
        <Grid container spacing={3} {...other}>
          {allCards.map((Card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default Content;
