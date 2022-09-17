import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation_en from './en.json';
import translation_zh from './zh.json';
import translation_de from './de.json';
import translation_fr from './fr.json';
import translation_hi from './hi.json';
import translation_it from './it.json';
import translation_ja from './ja.json';
import translation_ko from './ko.json';

const resources = {
    en: {
        translation: translation_en,
    },
    zh: {
        translation: translation_zh,
    },
    de: {
        translation: translation_de,
    },
    fr: {
        translation: translation_fr,
    },
    hi: {
        translation: translation_hi,
    },
    it: {
        translation: translation_it,
    },
    ja: {
        translation: translation_ja,
    },
    ko: {
        translation: translation_ko,
    }
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