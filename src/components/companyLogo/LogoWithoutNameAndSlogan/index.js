import React, { Component } from 'react';
import logo from './assets/logo.png';
import { injectIntl } from 'react-intl';
import { defineMessages } from 'react-intl.macro';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';

const i18nMsg = defineMessages({
  companyLogoAltText: {
    id: 'companyLogoAltText',
    defaultMessage: 'CuraNu',
    description: 'Text what will be shown in the "alt" attribute of the "IMG" element with the logo of the company.',
  },
});

const styles = {
  root: {
    width: 'auto',
    height: '100%',
    display: 'block',
  },
};

class LogoWithoutNameAndSlogan extends Component {
  render() {
    const { intl, classes, className, ...other } = this.props;

    return (
      <img
        src={logo}
        alt={intl.formatMessage(i18nMsg.companyLogoAltText)}
        className={clsx(classes.root, className)}
        {...other}
      />
    );
  }
}

export default injectIntl(withStyles(styles)(LogoWithoutNameAndSlogan));
