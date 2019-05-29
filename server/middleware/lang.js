import React from 'react';
import reactIntlSetup, { fallbackLanguage } from '../../src/reactIntlSetup';

const path = require('path');
const fs = require('fs');
const serialize = require('serialize-javascript');

const i18nPath = path.resolve(__dirname, '..', '..', 'i18n');
export const allSupportedLanguages = fs
  .readdirSync(i18nPath, 'utf8')
  .filter(fileName => fileName.match(/^messages-[a-z]{2}(-.+?)?\.json$/))
  .map(fileName => reactIntlSetup.normalizeLanguage(fileName.replace(/^messages-([a-z]{2}(-.+?)?)\.json$/, '$1')));
if (allSupportedLanguages.indexOf(fallbackLanguage) === -1) {
  allSupportedLanguages.push(fallbackLanguage);
}

export const getTranslatedMessages = language => {
  const allPossibleTranslationFiles = [
    path.join(i18nPath, `messages-${language}.json`),
    path.join(i18nPath, `messages-${reactIntlSetup.getPrimaryLanguage(language)}.json`),
  ];

  let translatedMessages = {};
  for (const translationFile of allPossibleTranslationFiles) {
    if (!fs.existsSync(translationFile)) {
      continue;
    }

    translatedMessages = require(translationFile);
    Object.keys(translatedMessages).forEach(key => !translatedMessages[key] && delete translatedMessages[key]);

    break;
  }
  return translatedMessages;
};

export default (req, res, next) => {
  const language = reactIntlSetup.normalizeLanguage(req.params[0]);

  // this empty function prevents us to return a empty script file.
  let localeData = '(function(){});';

  const localeDataFilePath = path.resolve(
    __dirname,
    '..',
    '..',
    'node_modules',
    'react-intl',
    'locale-data',
    `${reactIntlSetup.getPrimaryLanguage(language)}.js`
  );

  if (fs.existsSync(localeDataFilePath)) {
    localeData += fs.readFileSync(localeDataFilePath, 'utf8');
  }

  const translationMessages = getTranslatedMessages(language);

  localeData += `!function(w,m){w.__STA_MSGS__=m}(window,${serialize(translationMessages, { isJSON: true })});`;

  res.header('Content-Type', 'text/javascript; charset=UTF-8');
  res.end(localeData);
};
