import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import externalLinkIcon from '../../../../../components/Icon/assets/external-link.svg';
import { Card, CardContent, CardHeader } from '../../../../../components/Card';
import Typography from '@material-ui/core/Typography';

const i18nMsg = defineMessages({
  directlyToTitle: {
    id: 'HomeContent_DirectlyTo_Title',
    defaultMessage: 'Directly To',
  },
});

class DirectlyTo extends Component {
  render() {
    const { intl, ...other } = this.props;

    return (
      <Card {...other}>
        <CardHeader icon={externalLinkIcon} title={intl.formatMessage(i18nMsg.directlyToTitle)} />
        <CardContent>
          <Typography variant={'h6'}>Temporary Placeholder</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default injectIntl(DirectlyTo);
