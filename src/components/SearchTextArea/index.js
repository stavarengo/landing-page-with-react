import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '../Icon';
import searchIcon from '../Icon/assets/search.svg';
import { withStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

const styles = {
  root: {
    fontSize: '1.125rem',
    paddingRight: 0,
    backgroundColor: '#fff',
    border: '1px solid #DAE4EE',
    '& $notchedOutline': {
      border: 'none',
    },
  },
  notchedOutline: {
    borderRadius: 0,
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
  },
};

const i18nMsg = defineMessages({
  Search: {
    id: 'Search',
    defaultMessage: 'Search...',
  },
});

class SearchTextArea extends Component {
  static defaultProps = {
    showDefaultPlaceholder: true,
  };

  static propTypes = {
    /**
     * Decides whether to show the default placeholder or not.
     * If you set a custom placeholder this flag is ignored.
     */
    showDefaultPlaceholder: PropTypes.bool,
  };

  render() {
    const { showDefaultPlaceholder, classes, intl, ...other } = this.props;

    return (
      <TextField
        variant={'outlined'}
        margin={'none'}
        placeholder={showDefaultPlaceholder ? intl.formatMessage(i18nMsg.Search) : null}
        InputProps={{
          classes,
          disableUnderline: true,
          endAdornment: (
            <InputAdornment
              position={'end'}
              style={{
                maxHeight: 'none',
                height: 'auto',
                marginTop: '-1px',
                marginRight: '-1px',
                marginBottom: '-1px',
              }}
            >
              <ButtonBase>
                <Icon icon={searchIcon} />
              </ButtonBase>
            </InputAdornment>
          ),
        }}
        {...other}
      />
    );
  }
}

export default injectIntl(withStyles(styles)(SearchTextArea));
