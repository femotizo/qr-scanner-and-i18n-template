import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './en.json';
import es from './es.json';
import pt from './pt.json';

// Should the app fallback to English if user locale doesn't exists
// I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  es,
  pt,
};

I18n.langs = [
  'en',
  'es',
  'pt'
];

const currentLocale = I18n.currentLocale();

const locale = currentLocale.split('-')[0]

setLocale(locale);

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
};

export function setLocale(locale) {
  I18n.locale = locale
}

export default I18n;