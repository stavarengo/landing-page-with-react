import React, { Component } from 'react';
import { injectIntl, IntlProvider } from 'react-intl';
import { defineMessages } from 'react-intl.macro';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
import theme from './theme';
import reactIntlSetup from './reactIntlSetup';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { createGenerateClassName, StylesProvider, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const i18nMsg = defineMessages({
  DefaultDocumentTitle: {
    id: 'App.DefaultDocumentTitle',
    defaultMessage: 'CuraNu - Care and welfare',
    description:
      "Default HTML document title that will appears in the browser's tab. " +
      'This will be used when there is no specific HTML title for the current page, otherwise the ' +
      '"App.DocumentTitleTemplate" message will be used.',
  },
  DocumentTitleTemplate: {
    id: 'App.DocumentTitleTemplate',
    defaultMessage: '%s - CuraNu',
    description: "Template for the HTML document title that will appears in the browser's tab.",
  },
});

const AsyncPage = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading,
});

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

const App = injectIntl(
  class extends Component {
    componentDidMount() {
      const jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <StylesProvider generateClassName={generateClassName}>
          <ThemeProvider theme={theme}>
            <Helmet
              defaultTitle={this.props.intl.formatMessage(i18nMsg.DefaultDocumentTitle)}
              titleTemplate={this.props.intl.formatMessage(i18nMsg.DocumentTitleTemplate)}
            >
              <html lang={this.props.intl.locale} />
            </Helmet>
            <Route component={AsyncPage} />
          </ThemeProvider>
        </StylesProvider>
      );
    }
  }
);

export default class AppWithIntlProvider extends Component {
  render() {
    return (
      <IntlProvider
        initialNow={reactIntlSetup.initialNow}
        locale={reactIntlSetup.currentLanguage}
        messages={reactIntlSetup.messages}
        key={reactIntlSetup.currentLanguage}
        textComponent={React.Fragment}
      >
        <React.Fragment>
          <CssBaseline />
          <App />
        </React.Fragment>
      </IntlProvider>
    );
  }
}
