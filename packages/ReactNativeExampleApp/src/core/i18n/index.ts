import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';
import i18n from 'i18next';
import { translations } from 'resources';

const DEFAULT_LANGUAGE = 'en';
const DEFAULT_RTL_LANGUAGE = 'ar';

i18n.use(initReactI18next).init({
  resources: translations,
  lng: I18nManager.isRTL ? DEFAULT_RTL_LANGUAGE : DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
