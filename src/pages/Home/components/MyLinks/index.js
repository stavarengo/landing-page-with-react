import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import externalLinkIcon from '../../../../components/Icon/assets/external-link.svg';
import { Card, CardContent, CardHeader } from '../../../../components/Card';
import { List, ListItem, ListItemText } from '../../../../components/List';
import service from './services';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const i18nMsg = defineMessages({
  title: {
    id: 'HomeContent_MyLinks_Title',
    defaultMessage: 'My Links',
  },
});

class MyLinks extends Component {
  render() {
    const { intl, ...other } = this.props;
    const allItems = service();

    return (
      <Card {...other}>
        <CardHeader icon={externalLinkIcon} title={intl.formatMessage(i18nMsg.title)} />
        <CardContent>
          <List>
            {allItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href={`http://${item.link}`} color="inherit" target="_blank">
                        {item.link}
                      </Link>
                    }
                  />
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

export default injectIntl(MyLinks);
