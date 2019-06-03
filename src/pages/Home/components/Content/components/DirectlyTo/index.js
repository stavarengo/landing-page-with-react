import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import externalLinkIcon from '../../../../../../components/Icon/assets/external-link.svg';
import { Card, CardContent, CardHeader } from '../../../../../../components/Card';
import Divider from '@material-ui/core/Divider';
import service from './services';
import { List, ListItem, ListItemAvatarImg, ListItemText } from '../../../../../../components/List';

const i18nMsg = defineMessages({
  directlyToTitle: {
    id: 'HomeContent_DirectlyTo_Title',
    defaultMessage: 'Directly To',
  },
});

class DirectlyTo extends Component {
  render() {
    const { intl, ...other } = this.props;

    const allItems = service();
    const minHeight = Math.max(...allItems.map(item => item.image.h));
    const minWidth = Math.max(...allItems.map(item => item.image.w));

    return (
      <Card {...other}>
        <CardHeader icon={externalLinkIcon} title={intl.formatMessage(i18nMsg.directlyToTitle)} />
        <CardContent>
          <List>
            {allItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemAvatarImg src={item.image.src} height={minHeight} width={minWidth} />
                  <ListItemText primary={item.text} />
                </ListItem>
                {index < allItems.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default injectIntl(DirectlyTo);
