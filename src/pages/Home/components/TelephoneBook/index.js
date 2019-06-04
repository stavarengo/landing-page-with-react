import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import telephoneImage from './assets/telephone.svg';
import SearchTextArea from '../../../../components/inputs/SearchTextField';
import { FormattedMessage } from 'react-intl.macro';

const styles = theme => ({
  root: {
    backgroundColor: '#00C4E6',
    backgroundImage: `url(${telephoneImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'contain',
    color: '#fff',
    fontWeight: 700,
    padding: theme.spacing(2, 2, 4, 2),
    marginTop: theme.spacing(2),
  },
  title: {
    fontSize: '1.125rem',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2.5),
  },
  subtitle: {
    fontSize: '0.75rem',
    marginBottom: theme.spacing(2.5),
  },
});

class TelephoneBook extends Component {
  render() {
    const { classes, ...other } = this.props;

    return (
      <div className={classes.root} {...other}>
        <div className={classes.title}>
          <FormattedMessage id={'HomeContent_TelephoneBook_Title'} defaultMessage={'Telephone Book'} />
        </div>
        <div className={classes.subtitle}>
          <FormattedMessage
            id={'HomeContent_TelephoneBook_Subtitle'}
            defaultMessage={'Find colleagues by name, keyword, position, etc.'}
          />
        </div>
        <SearchTextArea
          showDefaultPlaceholder={false}
          IconProps={{
            backgroundColor: 'transparent',
          }}
          style={{
            border: 'none',
            width: '85%',
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(TelephoneBook);
