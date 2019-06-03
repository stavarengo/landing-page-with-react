import React, { Component } from 'react';
import AccordionComponent from '../../../../../components/Accordion';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';

const i18nMsg = defineMessages({
  accordionTitle: {
    id: 'HomeContent_AccordionTitle',
    defaultMessage: 'Accordion {number}',
  },
});

class Accordion extends Component {
  render() {
    const { intl, ...other } = this.props;

    return (
      <AccordionComponent
        panels={[1, 2, 3].map(number => ({
          summary: intl.formatMessage(i18nMsg.accordionTitle, { number }),
          details:
            'Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. ' +
            'Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito',
        }))}
        {...other}
      />
    );
  }
}

export default injectIntl(Accordion);
