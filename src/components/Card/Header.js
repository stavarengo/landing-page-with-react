import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '../Icon';
import arrowDownIcon from '../Icon/assets/arrow-down.svg';
import closeIcon from '../Icon/assets/close.svg';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const styles = theme => ({
  icon: {
    padding: theme.spacing(1.625),
    display: 'inline-block',
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#ff952d',
    marginLeft: theme.spacing(2),
  },
  iconWhite: {
    backgroundColor: '#fff',
  },
});

class Header extends Component {
  static propTypes = {
    /**
     * The icon to show on the title.
     */
    icon: PropTypes.string.isRequired,
    /**
     * The header's title.
     */
    title: PropTypes.string.isRequired,
  };

  render() {
    const { icon, title, classes, ...other } = this.props;

    return (
      <Grid container alignItems={'center'} {...other}>
        <Grid item>
          <Icon icon={icon} className={classes.icon} />
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography noWrap className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography noWrap component={'div'}>
            <Icon icon={arrowDownIcon} className={clsx(classes.icon, classes.iconWhite)} />
            <Icon icon={closeIcon} className={classes.icon} />
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Header);
