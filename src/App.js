import React, { Component } from 'react';
import { injectIntl, IntlProvider } from 'react-intl';
import { defineMessages } from 'react-intl.macro';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
import theme from './theme';
import reactIntlSetup from './reactIntlSetup';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import { createGenerateClassName, StylesProvider, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import availableLanguages from './services/availableLanguages';

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
  MetaTagDescription: {
    id: 'App.MetaTagDescription',
    defaultMessage:
      'Example of a fully functional landing page made with React + Router + Material UI. This website support Server Side Rendering (SSR) + Internationalized Routes + Stylized Material UI components (it does not look like Google App).',
    description: 'Value of the meta tag description. This is for SEO.',
  },
});

const AsyncPage = Loadable({
  loader: () => import('./pages'),
  loading: Loading,
});
const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound'),
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
            <CssBaseline />

            <Helmet
              defaultTitle={this.props.intl.formatMessage(i18nMsg.DefaultDocumentTitle)}
              titleTemplate={this.props.intl.formatMessage(i18nMsg.DocumentTitleTemplate)}
            >
              <html lang={this.props.intl.locale} />
              <meta name="description" content={this.props.intl.formatMessage(i18nMsg.MetaTagDescription)} />
            </Helmet>
            <Switch>
              <Route
                component={AsyncPage}
                path={`/:lang(${availableLanguages()
                  .map(({ url }) => url)
                  .join('|')})?`}
              />
              <Route component={AsyncNotFound} />
            </Switch>
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
        <App />
      </IntlProvider>
    );
  }
}
