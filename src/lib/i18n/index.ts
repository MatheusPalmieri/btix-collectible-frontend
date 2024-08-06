import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, es, pt } from './locales';

i18n.use(initReactI18next).init({
  resources: {
    en: { ...en },
    es: { ...es },
    pt: { ...pt },
  },
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  pluralSeparator: '_',
  keySeparator: '.',
});
