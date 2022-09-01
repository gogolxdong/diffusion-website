import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation_en from './en.json';
import translation_zh from './zh.json';

const resources = {
    en: {
        translation: translation_en,
    },
    zh: {
        translation: translation_zh,
    },
};

const defaultlang = window.localStorage.getItem('language') || 'en';
i18n.use(initReactI18next).init({
    resources,
    lng: defaultlang,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;