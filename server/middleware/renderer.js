import Loadable from 'react-loadable';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../src/App';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import Helmet from 'react-helmet';
import reactIntlSetup, { fallbackLanguage } from '../../src/reactIntlSetup';
import { allSupportedLanguages, getTranslatedMessages } from './lang';
import { StaticRouter } from 'react-router-dom';
import requireFileOrAbortIfFileDoNotExists from './_utils/requireFileOrAbortIfFileDoNotExists';
import mapReacLoadableModulesToWebpackChunks from './_utils/mapReacLoadableModulesToWebpackChunks';
import { ServerStyleSheets } from '@material-ui/styles';

const path = require('path');
const fs = require('fs');
const serialize = require('serialize-javascript');

const buildDirectory = path.resolve(__dirname, '..', '..', 'build');
const assetsManifest = requireFileOrAbortIfFileDoNotExists(
  path.resolve(buildDirectory, 'asset-manifest.json'),
  'Did you forged to run `npm run build` before starting this server?'
);
const indexHtmlData = requireFileOrAbortIfFileDoNotExists(
  path.join(buildDirectory, assetsManifest.files['index.html']),
  'Did you forged to run `npm run build` before starting this server?',
  filePath => fs.readFileSync(filePath, 'utf8')
);

/**
 * This SSR script was created based in various articles and tutorials.
 * Here is a list of the articles that helped me to build this SSR script.
 * - https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a
 *   **You must read this one** before make any change to this file.
 *   This one will describe how to support SSR in CRA without ejecting.
 * - https://material-ui.com/guides/server-rendering/
 *   **You must read this one** before make any change to this file.
 *   This one will describe how to get the CSS from the MaterialUI in the server.
 * -
 * https://medium.com/@cereallarceny/server-side-rendering-with-create-react-app-fiber-react-router-v4-helmet-redux-and-thunk-275cb25ca972
 */

// You can find a benchmark of the available CSS minifiers under
// https://github.com/GoalSmashers/css-minification-benchmark
// We have found that clean-css is faster than cssnano but the output is larger.
// Waiting for https://github.com/cssinjs/jss/issues/279
// 4% slower but 12% smaller output than doing it in a single step.
const prefixer = postcss([autoprefixer]);
const minifier = postcss([cssnano]);

export default (req, res, next) => {
  const sheetsRegistry = new ServerStyleSheets();
  const head = [];

  let requestedLanguage = req.acceptsLanguages(allSupportedLanguages);
  requestedLanguage = requestedLanguage || fallbackLanguage;
  if (req.query.l) {
    const normalizedLanguageParameter = reactIntlSetup.normalizeLanguage(req.query.l);
    if (allSupportedLanguages.indexOf(normalizedLanguageParameter) > -1) {
      requestedLanguage = normalizedLanguageParameter;
    } else if (allSupportedLanguages.indexOf(reactIntlSetup.getPrimaryLanguage(normalizedLanguageParameter)) > -1) {
      requestedLanguage = reactIntlSetup.getPrimaryLanguage(normalizedLanguageParameter);
    }
  }

  reactIntlSetup.currentLanguage = requestedLanguage;
  reactIntlSetup.initialNow = Date.now();
  reactIntlSetup.messages = getTranslatedMessages(reactIntlSetup.currentLanguage);

  const i18n = {
    initialNow: reactIntlSetup.initialNow,
    lang: reactIntlSetup.currentLanguage,
  };
  head.unshift(`<script type="text/javascript">window.__I18N__ = ${serialize(i18n, { isJSON: true })}</script>`);

  // render the app as a string
  const capturedModules = [];
  const routeContext = {};
  const html = ReactDOMServer.renderToString(
    sheetsRegistry.collect(
      <Loadable.Capture report={m => capturedModules.push(m)}>
        <StaticRouter location={req.originalUrl} context={routeContext}>
          <App />
        </StaticRouter>
      </Loadable.Capture>
    )
  );

  if (routeContext.url) {
    // Somewhere a `<Redirect>` was rendered
    res.redirect(301, routeContext.url);
  }

  let bundles = mapReacLoadableModulesToWebpackChunks(capturedModules);
  const extraChunks = bundles.map(bundle => `<script src="${bundle}"></script>`);

  // Grab the CSS from our sheetsRegistry.
  let css = sheetsRegistry.toString();
  const executePostCss = css => {
    if (process.env.NODE_ENV === 'production') {
      // This plugin is sync
      let prefixerResult = prefixer.process(css, { from: undefined });
      // This plugin is async
      return minifier.process(prefixerResult.css, { from: undefined });
    }
    return Promise.resolve(css);
  };

  executePostCss(css)
    .then(css => {
      const helmet = Helmet.renderStatic();
      head.push(helmet.title.toString());
      head.push(helmet.meta.toString());
      head.push(helmet.link.toString());
      head.push(`<style id="jss-server-side">${css}</style></head>`);

      const whatGoesInside = {
        htmlAttributes: helmet.htmlAttributes.toString(),
        bodyAttributes: helmet.bodyAttributes.toString(),
        head: head.join(''),
        jsBeforeMainScript: extraChunks.join(''),
        justBeforeCloseBodyTag: '',
      };

      // inject the rendered app into our html and send it
      res.send(
        indexHtmlData
          .replace('<html lang="en">', '<html ' + whatGoesInside.htmlAttributes + '>')
          .replace('</head>', whatGoesInside.head + '</head>')
          .replace('<body>', '<body ' + whatGoesInside.bodyAttributes + '>')
          .replace(
            '<div id="root"></div>',
            `<div id="root">${html}</div><script type="text/javascript" src="/lang/${
              reactIntlSetup.currentLanguage
            }.js"></script>`
          )
          .replace(/(<body[\s\S]+?)(<script)/, `$1${whatGoesInside.jsBeforeMainScript}$2`)
          .replace('</body>', whatGoesInside.justBeforeCloseBodyTag + '</body>')
      );
    })
    .catch(error => {
      next(error);
    });
};
