import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import { Card, CardFooter } from '../../../components/Card';
import addIcon from '../../../components/Icon/assets/add.svg';

const i18nMsg = defineMessages({
  footer: {
    id: 'HomeContent_AddWidget_Footer',
    defaultMessage: 'Add widget',
  },
});

class AddWidget extends Component {
  render() {
    const { intl, ...other } = this.props;

    return (
      <Card {...other}>
        <CardFooter text={intl.formatMessage(i18nMsg.footer)} icon={addIcon} />
      </Card>
    );
  }
}

export default injectIntl(AddWidget);
