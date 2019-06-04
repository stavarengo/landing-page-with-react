import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import blackSettingsButton from '../../../../../components/Icon/assets/blackSettingsButton.svg';
import notificationBell from '../../../../../components/Icon/assets/notificationBell.svg';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth/withWidth';
import Icon from '../../../../../components/Icon';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const styles = theme => ({
  languages: {
    marginRight: theme.spacing(2),

    '& :not(:last-child)': {
      marginRight: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      borderRight: `${theme.typography.pxToRem(1)} solid ${theme.palette.divider}`,
    },
  },
  badge: {
    top: '32%',
    right: theme.typography.pxToRem(3),
    // The border color match the background color.
    backgroundColor: '#ff9033',
    fontWeight: 'bold',
    fontSize: '64.29%',
    minWidth: theme.spacing(2),
    height: theme.spacing(2),
  },
});

class ListOfIcons extends Component {
  static propTypes = {
    /**
     * Array of the languages the website support.
     * It will be rendered as menu of options for the user to change the website language.
     */
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * The text to display.
         */
        label: PropTypes.string.isRequired,
        /**
         * The URL to where the user will be redirect when he clicks in the language.
         */
        url: PropTypes.string.isRequired,
      })
    ),
  };
  render() {
    const { languages, classes, width: screenWidth, ...other } = this.props;

    return (
      <Grid container {...other} alignItems={'center'}>
        {this.getLanguagesMenu(languages, classes)}
        <Grid item>
          <ButtonBase>
            <Icon icon={blackSettingsButton} size={4} />
          </ButtonBase>
        </Grid>
        <Grid item>
          <Box ml={isWidthUp('md', screenWidth) ? 2 : 1}>
            <ButtonBase>
              <Icon
                icon={notificationBell}
                size={4}
                badgeProps={{ badgeContent: 1, classes: { badge: classes.badge }, color: 'primary' }}
              />
            </ButtonBase>
          </Box>
        </Grid>
      </Grid>
    );
  }

  getLanguagesMenu(languages, classes) {
    if (!languages) {
      return null;
    }

    return (
      <Grid item className={classes.languages}>
        {languages.map((language, index) => (
          <Link color={'inherit'} href={language.url} key={index}>
            {language.label}
          </Link>
        ))}
      </Grid>
    );
  }
}

export default withWidth()(withStyles(styles)(ListOfIcons));
