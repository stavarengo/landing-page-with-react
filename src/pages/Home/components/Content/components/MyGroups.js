import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import groupsIcons from '../../../../../components/Icon/assets/groups.svg';
import { Card, CardContent, CardFooter, CardHeader } from '../../../../../components/Card';
import Typography from '@material-ui/core/Typography';

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

    return (
      <Card {...other}>
        <CardHeader icon={groupsIcons} title={intl.formatMessage(i18nMsg.title)} />
        <CardContent>
          <Typography variant={'h6'}>Temporary Placeholder</Typography>
        </CardContent>
        <CardFooter text={intl.formatMessage(i18nMsg.footer)} />
      </Card>
    );
  }
}

export default injectIntl(MyGroups);
