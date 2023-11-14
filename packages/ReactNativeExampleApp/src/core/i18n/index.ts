import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';
import i18n from 'i18next';

import { translations } from '../../resources';
import { logger } from '../logger';

const DEFAULT_LANGUAGE = 'en';
const DEFAULT_RTL_LANGUAGE = 'ar';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: translations,
    lng: I18nManager.isRTL ? DEFAULT_RTL_LANGUAGE : DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(logger.error);

export { i18n };
