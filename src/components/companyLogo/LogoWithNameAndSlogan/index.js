import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { defineMessages, FormattedMessage } from 'react-intl.macro';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import LogoWithoutNameAndSlogan from '../LogoWithoutNameAndSlogan';
import Box from '@material-ui/core/Box';
import { Helmet } from 'react-helmet';

const i18nMsg = defineMessages({
  companyName: {
    id: 'companyName',
    defaultMessage: 'CuraNu',
  },
  companySlogan: {
    id: 'companySlogan',
    defaultMessage: 'Care and welfare',
  },
});

const styles = {
  imgLogo: {
    height: '3.25rem',
  },
  companyName: {
    fontSize: '1.5rem',
    fontFamily: "'Raleway', sans-serif",

    '& > :nth-child(-n+4)': {
      fontWeight: 700,
    },
  },
  companySlogan: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.9375rem',
  },
};

class LogoWithNameAndSlogan extends Component {
  render() {
    const { intl, classes, ...other } = this.props;

    return (
      <Grid container alignItems={'center'} {...other}>
        <Grid item>
          <LogoWithoutNameAndSlogan className={classes.imgLogo} />
        </Grid>
        <Grid item>
          <Box ml={1.5}>
            <Helmet>
              <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
            </Helmet>
            <Typography className={classes.companyName}>
              {intl
                .formatMessage(i18nMsg.companyName)
                .split('')
                .map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
            </Typography>
            <Typography className={classes.companySlogan}>
              <FormattedMessage id="companySlogan" defaultMessage="Care and welfare" />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default injectIntl(withStyles(styles)(LogoWithNameAndSlogan));
