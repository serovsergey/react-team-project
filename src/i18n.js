import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';


i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: 
                '/locales/{{lng}}/{{ns}}.json',
        },

        fallbackLng: 'en',
        supportedLngs: ['en', 'ua', 'pl'],
        debug: true,
        nsSeparator: "::",

        interpolation: {
            escapeValue: false,
        },

        react: {
            bindI18n: 'languageChanged',
            bindI18nStore: '',
            transEmptyNodeValue: '',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
            useSuspense: true,
        },
    });

export default i18n;