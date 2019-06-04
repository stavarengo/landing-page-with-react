import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl.macro';
import TextField from '../../components/inputs/TextField';
import Button from '../../components/inputs/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import { injectIntl } from 'react-intl';

const i18n = {
  success: {
    id: 'ContactPage_Success',
    defaultMessage: 'Yor message was sent!',
  },
};

class Contact extends Component {
  state = {
    name: {
      label: <FormattedMessage id={'ContactPage_InputLabel_Name'} defaultMessage={'Name: *'} />,
      value: '',
      autoFocus: true,
      inputRef: React.createRef(),
      autoComplete: 'name',
    },
    email: {
      label: <FormattedMessage id={'ContactPage_InputLabel_Email'} defaultMessage={'Email: *'} />,
      value: '',
      type: 'email',
      inputRef: React.createRef(),
      autoComplete: 'email',
    },
    subject: {
      label: <FormattedMessage id={'ContactPage_InputLabel_Subject'} defaultMessage={'Subject: *'} />,
      value: '',
      inputRef: React.createRef(),
    },
    message: {
      label: <FormattedMessage id={'ContactPage_InputLabel_Message'} defaultMessage={'Message: *'} />,
      value: '',
      multiline: true,
      rows: 10,
      inputRef: React.createRef(),
      onKeyPress: null,
    },
  };

  render() {
    const { staticContext, ...other } = this.props;
    return (
      <Grid container justify={'center'}>
        <Grid item xs={11} md={10} lg={8}>
          <Box mb={5}>
            <Typography variant={'h4'} {...other}>
              <FormattedMessage id={'ContactPage_Title'} defaultMessage={'Contact Page'} />
            </Typography>
          </Box>
          <form onSubmit={this.onFormSubmit()}>
            <Grid container spacing={2}>
              {Object.keys(this.state).map(inputName => {
                const { label, value, ...others } = this.state[inputName];

                return (
                  <Grid container item key={inputName}>
                    <Grid item xs={12} md={2}>
                      <Typography variant={'body1'}>{label}</Typography>
                      <Hidden mdUp>
                        <Box mb={1} />
                      </Hidden>
                    </Grid>
                    <Grid item xs={12} md>
                      <TextField
                        fullWidth
                        onChange={this.onTextFieldChange(inputName)}
                        value={value}
                        onKeyPress={this.onTextFieldKeyPress()}
                        {...others}
                      />
                    </Grid>
                  </Grid>
                );
              })}

              <Grid container item justify={'flex-end'}>
                <Button color={'primary'} variant={'contained'} type={'submit'}>
                  <FormattedMessage id={'ContactPage_Button_Send'} defaultMessage={'Send'} />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }

  onFormSubmit = () => event => {
    event.stopPropagation();
    event.preventDefault();

    this.validate();

    let allFieldsFulfilled = Object.keys(this.state).every(inputName => {
      if (this.state[inputName].error) {
        this.state[inputName].inputRef.current.focus();
        return false;
      }

      return true;
    });

    if (allFieldsFulfilled) {
      this.resetForm();
      alert(this.props.intl.formatMessage(i18n.success));
    }
  };

  onTextFieldChange = inputName => event => {
    let currentState = this.state;
    currentState[inputName].value = event.target.value;
    if (event.target.value) {
      this.resetValidation(inputName);
    }
    this.setState(currentState);
  };

  validate() {
    let currentState = this.state;
    Object.keys(this.state).forEach(inputName => {
      const { value } = currentState[inputName];

      if (value.trim()) {
        this.resetValidation(inputName);
      } else {
        currentState[inputName].error = true;
        currentState[inputName].helperText = (
          <FormattedMessage id={'ContactPage_InputHelpText_Require'} defaultMessage={'This field is required.'} />
        );
      }
    });

    this.setState(this.state);
  }

  resetValidation(inputName) {
    delete this.state[inputName].error;
    delete this.state[inputName].helperText;
  }

  onTextFieldKeyPress = () => ev => {
    if (ev.key === 'Enter') {
      this.onFormSubmit()(ev);
      ev.preventDefault();
    }
  };

  resetForm() {
    let currentState = this.state;
    Object.keys(this.state).forEach(inputName => {
      this.resetValidation(inputName);
      currentState[inputName].value = '';
      currentState.name.inputRef.current.focus();
    });
    this.setState(this.state);
  }
}

export default injectIntl(Contact);
