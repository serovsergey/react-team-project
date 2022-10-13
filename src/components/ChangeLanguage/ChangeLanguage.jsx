import React from 'react';
import s from './ChangeLanguage.module.scss';
import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {
    const { i18n } = useTranslation();
    const languages = [
        "en",
        "ua",
        "pl"
    ];
    // console.log(i18n.language)
    return (
        <div className={s.buttonWrapper}>
            {languages.map(lang => (
                <button
                    key={lang}
                    className={s.btn + (lang===i18n.language ? " " + s.active: "") } 
                    onClick={() => i18n.changeLanguage(lang)}
                >
                    {lang}
                </button>
            )
            )}
        </div>
    );
};

export default ChangeLanguage;
