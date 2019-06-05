import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '../Icon';
import arrowRightIcon from '../Icon/assets/arrow-right.svg';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    backgroundColor: '#ebf0f4',
  },
  icon: {
    padding: theme.spacing(1.375, 2),
    display: 'inline-block',
    backgroundColor: '#dae4ee',
  },
  text: {
    paddingLeft: theme.spacing(2),
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
  },
});

class Footer extends Component {
  static defaultProps = {
    icon: arrowRightIcon,
  };

  static propTypes = {
    /**
     * The footer text.
     */
    text: PropTypes.string.isRequired,
    /**
     * The icon of the footer.
     */
    icon: PropTypes.string,
  };

  render() {
    const { icon, text, classes, ...other } = this.props;

    return (
      <Grid container alignItems={'stretch'} {...other} className={classes.root}>
        <Grid item xs zeroMinWidth>
          <ButtonBase className={classes.text}>
            <Typography noWrap variant={'body2'}>
              {text}
            </Typography>
          </ButtonBase>
        </Grid>
        <Grid item>
          <ButtonBase>
            <Typography noWrap component={'div'}>
              <Icon icon={icon} className={classes.icon} />
            </Typography>
          </ButtonBase>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Footer);
