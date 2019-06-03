import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import externalLinkIcon from '../../../../../components/Icon/assets/external-link.svg';
import { Card, CardHeader, CardContent, CardFooter } from '../../../../../components/Card';
import Typography from '@material-ui/core/Typography';

const i18nMsg = defineMessages({
  title: {
    id: 'HomeContent_Microblog_Title',
    defaultMessage: 'Microblog',
  },
  footer: {
    id: 'HomeContent_Microblog_Footer',
    defaultMessage: 'Show more',
  },
});

class Microblog extends Component {
  render() {
    const { intl, ...other } = this.props;

    return (
      <Card {...other}>
        <CardHeader icon={externalLinkIcon} title={intl.formatMessage(i18nMsg.title)} />
        <CardContent>
          <Typography variant={'h6'}>Temporary Placeholder</Typography>
        </CardContent>
        <CardFooter text={intl.formatMessage(i18nMsg.footer)} />
      </Card>
    );
  }
}

export default injectIntl(Microblog);