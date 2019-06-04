import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LogoWithNameAndSlogan from '../../../components/companyLogo/LogoWithNameAndSlogan';
import { FormattedMessage } from 'react-intl.macro';
import { withStyles } from '@material-ui/styles';
import Link from '../../../components/Link';
import PropTypes from 'prop-types';

const styles = theme => ({
  intranetMsg: {
    marginLeft: theme.spacing(5),
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.33,
    color: '#000',
  },
});

class SectionBetweenInstitutionalMenuAndTheMainMenu extends Component {
  static propTypes = {
    /**
     * The URL to where the user will be redirect when he click in the logo.
     * This is usually the home page URL.
     */
    href: PropTypes.string.isRequired,
  };

  render() {
    const { href, classes, ...other } = this.props;

    return (
      <Grid container alignItems={'flex-end'} {...other}>
        <Grid item>
          <Link to={href} underline={'none'} color={'inherit'}>
            <LogoWithNameAndSlogan />
          </Link>
        </Grid>
        <Grid item>
          <div className={classes.intranetMsg}>
            <Link to={href} underline={'none'} color={'inherit'}>
              <FormattedMessage id="Intranet" defaultMessage={'Intranet'} />
            </Link>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SectionBetweenInstitutionalMenuAndTheMainMenu);
