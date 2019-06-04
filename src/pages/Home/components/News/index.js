import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { FormattedDate, injectIntl } from 'react-intl';
import { Card, CardContent, CardFooter, CardHeader } from '../../../../components/Card';
import newspaperIcon from '../../../../components/Icon/assets/newspaper.svg';
import { List, ListItem, ListItemAvatarImg, ListItemText } from '../../../../components/List';
import service from './services';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import favoritePng from '../../../../components/assets/favorites.png';

const i18nMsg = defineMessages({
  title: {
    id: 'HomeContent_News_Title',
    defaultMessage: 'News',
  },
  footer: {
    id: 'HomeContent_News_Footer',
    defaultMessage: 'More news',
  },
});

class News extends Component {
  render() {
    const { intl, ...other } = this.props;
    const allItems = service();
    const minHeight = Math.max(...allItems.map(item => item.image.h));
    const minWidth = Math.max(...allItems.map(item => item.image.w));

    return (
      <Card {...other}>
        <CardHeader icon={newspaperIcon} title={intl.formatMessage(i18nMsg.title)} />
        <CardContent>
          <List>
            {allItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems={'flex-start'}>
                  <ListItemAvatarImg src={item.image.src} height={minHeight} width={minWidth} marginRight={2} />
                  <ListItemText>
                    <Box clone pb={1}>
                      <ListItemText
                        secondary={<FormattedDate value={item.date} />}
                        secondaryTypographyProps={{ gutterBottom: false }}
                      />
                    </Box>
                    <ListItemText primary={item.text} />
                  </ListItemText>
                  <ListItemSecondaryAction style={{ top: '18px', transform: 'none' }}>
                    <img src={favoritePng} alt="" />
                  </ListItemSecondaryAction>
                </ListItem>
                {index < allItems.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
        <CardFooter text={intl.formatMessage(i18nMsg.footer)} />
      </Card>
    );
  }
}

export default injectIntl(News);
