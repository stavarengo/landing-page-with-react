import { addLocaleData } from 'react-intl';

export const fallbackLanguage = 'en';

let _currentLanguage;
let _messages;
let _initialNow;

const reactIntlSetup = {
  normalizeLanguage(language) {
    language = (language || '').replace(/(.+?)_/, '$1-');
    const secondaryLanguage = this.getSecondaryLanguage(language);
    language = this.getPrimaryLanguage(language);
    if (secondaryLanguage) {
      language += `-${secondaryLanguage}`;
    }

    return language;
  },

  getPrimaryLanguage(language) {
    return language.replace(/-.+/, '').toLowerCase();
  },

  getSecondaryLanguage(language) {
    if (!language.match(/^.+?-.+?$/)) {
      return null;
    }
    return language.replace(/^.+?-/, '').toUpperCase();
  },

  get initialNow() {
    return _initialNow;
  },

  set initialNow(initialNow) {
    _initialNow = initialNow;
  },

  set currentLanguage(currentLanguage) {
    _currentLanguage = this.normalizeLanguage(currentLanguage);
  },

  get currentLanguage() {
    return _currentLanguage;
  },

  get primaryLanguage() {
    return this.getPrimaryLanguage(this.currentLanguage);
  },

  get secondaryLanguage() {
    return this.getSecondaryLanguage(this.currentLanguage);
  },

  get messages() {
    return _messages;
  },

  set messages(messages) {
    _messages = messages;
  },
};

const _window = typeof window === 'undefined' ? {} : window;

if (typeof _window.ReactIntlLocaleData !== 'undefined') {
  Object.keys(_window.ReactIntlLocaleData).forEach(localeName => {
    addLocaleData(_window.ReactIntlLocaleData[localeName]);
  });
}

const i18nFromWindow = _window.__I18N__ || {};

if (process.env.NODE_ENV === 'development') {
  if (!i18nFromWindow.lang) {
    i18nFromWindow.lang = fallbackLanguage;
  }
}

if (_window.__STA_MSGS__) {
  reactIntlSetup.messages = _window.__STA_MSGS__;
}

reactIntlSetup.currentLanguage = i18nFromWindow.lang;
reactIntlSetup.initialNow = i18nFromWindow.initialNow;

export default reactIntlSetup;
