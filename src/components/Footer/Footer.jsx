// import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import { ReactComponent as HandFooterIcon } from '../../assets/svg/head_finger.svg';
import { useTranslation } from 'react-i18next';
import s from './Footer.module.scss';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <>
            <footer className={s.footer}>
                <ul className={s.footer_list}>
                    <li className={s.footer_item}>
                        <p className={s.footer_text}>{t(`KidsLike`)}</p>

                        <HandFooterIcon
                            style={{
                                marginRight: '10',
                            }}
                        />
                    </li>
                    <li className={s.footer_item}>
                        <p className={s.footer_text}>
                            {t(
                                `Making the life of parents and children isy :)`
                            )}
                        </p>
                    </li>
                    <li className={s.footer_item}>
                        <p className={s.footer_text}>
                            {new Date().getFullYear()}
                        </p>
                    </li>
                </ul>
            </footer>
        </>
    );
};

export default Footer;
