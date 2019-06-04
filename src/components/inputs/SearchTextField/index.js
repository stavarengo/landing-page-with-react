import React, { Component } from 'react';
import TextField from '../BaseTextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '../../Icon';
import searchIcon from '../../Icon/assets/search.svg';
import ButtonBase from '@material-ui/core/ButtonBase';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

const i18nMsg = defineMessages({
  Search: {
    id: 'Search',
    defaultMessage: 'Search...',
  },
});

class SearchTextField extends Component {
  static defaultProps = {
    showDefaultPlaceholder: true,
  };

  static propTypes = {
    /**
     * Decides whether to show the default placeholder or not.
     * If you set a custom placeholder this flag is ignored.
     */
    showDefaultPlaceholder: PropTypes.bool,
    /**
     * Properties applied to the {@link Icon} element.
     */
    IconProps: PropTypes.object,
  };

  render() {
    const { showDefaultPlaceholder, IconProps, intl, ...other } = this.props;

    return (
      <TextField
        placeholder={showDefaultPlaceholder ? intl.formatMessage(i18nMsg.Search) : null}
        InputProps={{
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
                <Icon icon={searchIcon} {...IconProps} />
              </ButtonBase>
            </InputAdornment>
          ),
        }}
        {...other}
      />
    );
  }
}

export default injectIntl(SearchTextField);
