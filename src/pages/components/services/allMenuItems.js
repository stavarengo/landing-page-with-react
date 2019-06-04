import { defineMessages } from 'react-intl.macro';

const i18nMsg = defineMessages({
  InstitutionalMenu1: { id: 'Institutional.Menu1', defaultMessage: 'Groups' },
  InstitutionalMenu2: { id: 'Institutional.Menu2', defaultMessage: 'Contact' },
  InstitutionalMenu3: { id: 'Institutional.Menu3', defaultMessage: 'FAQ' },
  InstitutionalMenu4: { id: 'Institutional.Menu4', defaultMessage: 'Facebook' },
  InstitutionalMenu5: { id: 'Institutional.Menu5', defaultMessage: 'Microblog' },
  InstitutionalMenu6: { id: 'Institutional.Menu6', defaultMessage: 'About us' },
  MainMenuMenu1: { id: 'MainMenu.Menu1', defaultMessage: 'Articles' },
  MainMenuMenu2: { id: 'MainMenu.Menu2', defaultMessage: 'News' },
  MainMenuMenu3: { id: 'MainMenu.Menu3', defaultMessage: 'Events' },
  MainMenuMenu4: { id: 'MainMenu.Menu4', defaultMessage: 'Quality manual' },
});

let allItems = null;

export default function(intl) {
  if (!allItems) {
    allItems = {
      institutionalMenu: [
        {
          label: intl.formatMessage(i18nMsg.InstitutionalMenu1),
          icon: null,
          href: '/',
        },
        {
          label: intl.formatMessage(i18nMsg.InstitutionalMenu2),
          icon: null,
          href: '/contact',
        },
        {
          label: intl.formatMessage(i18nMsg.InstitutionalMenu3),
          icon: null,
          href: '/',
        },
        {
          label: intl.formatMessage(i18nMsg.InstitutionalMenu4),
          icon: null,
          href: '/',
        },
        {
          label: intl.formatMessage(i18nMsg.InstitutionalMenu5),
          icon: null,
          href: '/',
        },
        {
          label: intl.formatMessage(i18nMsg.InstitutionalMenu6),
          icon: null,
          href: '/',
        },
      ],
      mainMenu: [
        {
          label: intl.formatMessage(i18nMsg.MainMenuMenu1),
          icon: null,
          href: '/',
        },
        {
          label: intl.formatMessage(i18nMsg.MainMenuMenu2),
          icon: null,
          href: '/',
        },
        {
          label: intl.formatMessage(i18nMsg.MainMenuMenu3),
          icon: null,
          href: '/',
        },
        {
          label: intl.formatMessage(i18nMsg.MainMenuMenu4),
          icon: null,
          href: '/',
        },
      ],
    };
  }
  return allItems;
}
