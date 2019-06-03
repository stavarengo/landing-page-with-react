import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import chartIcon from '../../../../../../components/Icon/assets/chart.svg';
import { Card, CardContent, CardFooter, CardHeader } from '../../../../../../components/Card';
import { List, ListItem, ListItemText } from '../../../../../../components/List';
import service from './services';
import Divider from '@material-ui/core/Divider';

const i18nMsg = defineMessages({
  title: {
    id: 'HomeContent_QualityManual_Title',
    defaultMessage: 'Quality Manual',
  },
  updatedDate: { id: 'HomeContent_QualityManual_Updated', defaultMessage: 'Updated: {date, date}' },
  footer: {
    id: 'HomeContent_QualityManual_Footer',
    defaultMessage: 'To quality manual',
  },
});

class QualityManual extends Component {
  render() {
    const { intl, ...other } = this.props;
    const allItems = service();

    return (
      <Card {...other}>
        <CardHeader icon={chartIcon} title={intl.formatMessage(i18nMsg.title)} />
        <CardContent>
          <List>
            {allItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={item.description}
                    secondary={intl.formatMessage(i18nMsg.updatedDate, { date: item.date })}
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

export default injectIntl(QualityManual);
