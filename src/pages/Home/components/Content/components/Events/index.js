import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { FormattedDate, injectIntl } from 'react-intl';
import calendarIcon from '../../../../../../components/Icon/assets/calendar.svg';
import { Card, CardContent, CardFooter, CardHeader } from '../../../../../../components/Card';
import Divider from '@material-ui/core/Divider';
import service from './services';
import { List, ListItem, ListItemAvatarBase, ListItemText } from '../../../../../../components/List';

const i18nMsg = defineMessages({
  title: {
    id: 'HomeContent_Events_Title',
    defaultMessage: 'Events',
  },
  footer: {
    id: 'HomeContent_Events_Footer',
    defaultMessage: 'More events',
  },
});

class DirectlyTo extends Component {
  render() {
    const { intl, ...other } = this.props;

    const allItems = service();

    return (
      <Card {...other}>
        <CardHeader icon={calendarIcon} title={intl.formatMessage(i18nMsg.title)} />
        <CardContent>
          <List>
            {allItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemAvatarBase>
                    <ListItemText secondary={<FormattedDate value={item.date} />} />
                  </ListItemAvatarBase>
                  <ListItemText primary={item.text} />
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

export default injectIntl(DirectlyTo);
