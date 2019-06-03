import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import externalLinkIcon from '../../../../../components/Icon/assets/external-link.svg';
import { Card, CardHeader, CardContent, CardFooter } from '../../../../../components/Card';
import Typography from '@material-ui/core/Typography';

const i18nMsg = defineMessages({
  title: {
    id: 'HomeContent_Blogs_Title',
    defaultMessage: 'Blogs',
  },
  footer: {
    id: 'HomeContent_Blogs_Footer',
    defaultMessage: 'More blogs',
  },
});

class Blogs extends Component {
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

export default injectIntl(Blogs);
