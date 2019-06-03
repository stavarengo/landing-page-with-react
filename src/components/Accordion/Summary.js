import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ArrowRightIcon from '../Icon/assets/arrow-right.svg';
import Icon from '../Icon';

const styles = theme => ({
  root: {
    fontSize: '1.125rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#ff952d',
    backgroundColor: '#ebf0f4',
    paddingRight: 0,
    minHeight: '0 !important',

    '&$expanded': {
      backgroundColor: '#657189',
    },
  },

  expandIcon: {
    padding: '0.213rem',
    borderRadius: 0,
    backgroundColor: '#e5f0fa !important',

    '& img': {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },

    '&$expanded': {
      transform: 'none',

      '& img': {
        transform: 'rotate(90deg)',
      },
    },
  },

  content: {
    '&$expanded': {
      margin: 0,
    },
  },

  expanded: {},
});

class Summary extends Component {
  render() {
    const { classes, children, ...other } = this.props;

    return (
      <ExpansionPanelSummary
        classes={classes}
        expandIcon={<Icon icon={ArrowRightIcon} />}
        IconButtonProps={{
          edge: false,
          disableRipple: true,
        }}
        {...other}
      >
        {children}
      </ExpansionPanelSummary>
    );
  }
}

export default withStyles(styles)(Summary);
