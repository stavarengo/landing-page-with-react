import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import blackSettingsButton from '../../../../../../components/Icon/assets/blackSettingsButton.svg';
import notificationBell from '../../../../../../components/Icon/assets/notificationBell.svg';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth/withWidth';
import Icon from '../../../../../../components/Icon';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  badge: {
    top: '32%',
    right: '3px',
    // The border color match the background color.
    backgroundColor: '#ff9033',
    fontWeight: 'bold',
    fontSize: '64.29%',
    minWidth: theme.spacing(2),
    height: theme.spacing(2),
  },
});

class ListOfIcons extends Component {
  render() {
    const { classes, width: screenWidth, ...other } = this.props;

    return (
      <Grid container spacing={isWidthUp('md', screenWidth) ? 2 : 1} {...other}>
        <Grid item>
          <ButtonBase>
            <Icon icon={blackSettingsButton} size={4} />
          </ButtonBase>
        </Grid>
        <Grid item>
          <Icon
            icon={notificationBell}
            size={4}
            badgeProps={{ badgeContent: 1, classes: { badge: classes.badge }, color: 'primary' }}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withWidth()(withStyles(styles)(ListOfIcons));