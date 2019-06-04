import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import groupsIcon from '../../../../../../components/Icon/assets/groups.svg';
import { Card, CardContent, CardFooter, CardHeader } from '../../../../../../components/Card';
import Divider from '@material-ui/core/Divider';
import service from './services';
import { List, ListItem, ListItemAvatarImg, ListItemText } from '../../../../../../components/List';

const i18nMsg = defineMessages({
  title: {
    id: 'HomeContent_MyGroups_Title',
    defaultMessage: 'My Groups',
  },
  footer: {
    id: 'HomeContent_MyGroups_Footer',
    defaultMessage: 'More groups',
  },
});

class MyGroups extends Component {
  render() {
    const { intl, ...other } = this.props;

    const allItems = service();
    const minHeight = Math.max(...allItems.map(item => item.image.h));
    const minWidth = Math.max(...allItems.map(item => item.image.w));

    return (
      <Card {...other}>
        <CardHeader icon={groupsIcon} title={intl.formatMessage(i18nMsg.title)} />
        <CardContent>
          <List>
            {allItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemAvatarImg src={item.image.src} height={minHeight} width={minWidth} marginRight={4} />
                  <ListItemText
                    primary={item.text}
                    style={{ fontSize: '1rem' }}
                    primaryTypographyProps={{ variant: 'body1' }}
                  />
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

export default injectIntl(MyGroups);
