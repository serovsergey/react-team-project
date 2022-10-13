import React from 'react';
//import * as lang from '../../locales/translationUa'

import s from './ChangeLanguage.module.scss';
import { useTranslation } from 'react-i18next';
// import resources from '../../locales/resourcesLanguage'

const ChangeLanguage = () => {
    const { t, i18n } = useTranslation();
    const languages = [
        "en",
        "ua",
    ];
    return (
        <div className={s.buttonWrapper}>
            {languages.map(lang => (
                <button
                    key={lang}
                    className={s.buttonOnLangClick} //перейменутувати клас
                    onClick={() => i18n.changeLanguage(lang)}
                >
                    {lang}
                </button>
            )
            )}

  
            {/* {i18n.language === 'ua' && (
                <button
                    className={s.buttonOnLangClick}
                    onClick={() => i18n.changeLanguage('en')}  //https://react.i18next.com/legacy-v9/step-by-step-guide#d-let-the-user-toggle-the-language
                >
                    UA
                </button>
            )}

            {i18n.language === 'en' && (
                <button
                    className={s.buttonOnLangClick}
                    onClick={() => i18n.changeLanguage('ua')}
                >
                    EN
                </button>
            )} */}
        </div>
    );
};

export default ChangeLanguage;
