import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LogoWithNameAndSlogan from '../../../../components/companyLogo/LogoWithNameAndSlogan';
import { FormattedMessage } from 'react-intl.macro';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  intranetMsg: {
    marginLeft: theme.spacing(5),
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.33,
  },
});

class SectionBetweenInstitutionalMenuAndTheMainMenu extends Component {
  render() {
    const { classes, ...other } = this.props;

    return (
      <Grid container alignItems={'flex-end'} {...other}>
        <Grid item>
          <LogoWithNameAndSlogan />
        </Grid>
        <Grid item>
          <div className={classes.intranetMsg}>
            <FormattedMessage id="Intranet" defaultMessage={'Intranet'} />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SectionBetweenInstitutionalMenuAndTheMainMenu);
