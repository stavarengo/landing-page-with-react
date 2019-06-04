import React, { Component } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import chartIcon from '../../../../../components/Icon/assets/chart.svg';
import { Card, CardContent, CardHeader } from '../../../../../components/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const i18nMsg = defineMessages({
  title: {
    id: 'HomeContent_Polls_Title',
    defaultMessage: 'Polls',
  },
});

class Polls extends Component {
  render() {
    const { intl, ...other } = this.props;

    return (
      <Card {...other}>
        <CardHeader icon={chartIcon} title={intl.formatMessage(i18nMsg.title)} />
        <CardContent>
          <Box py={2.5}>
            <Typography variant={'body2'}>
              <FormattedMessage id={'HomeContent_Polls_NoPollsAvailable'} defaultMessage={'No polls are available.'} />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default injectIntl(Polls);
