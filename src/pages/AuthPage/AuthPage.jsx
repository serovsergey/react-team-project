import AuthForm from 'components/AuthForm';

import Footer from 'components/Footer/Footer';
import { MediaQuery } from '../../hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';

import s from './authPage.module.scss';

const AuthPage = () => {
    const { t, i18n } = useTranslation();
    return (
        <section className={s.section_auth_page}>
            <h1 className={s.title}>
                {t(`Do your homework, get some great prizes!`)}
            </h1>

            <AuthForm></AuthForm>
            <MediaQuery.Desktop>
                <Footer></Footer>
            </MediaQuery.Desktop>
            <MediaQuery.Tablet>
                <Footer></Footer>
            </MediaQuery.Tablet>

            <MediaQuery.Desktop>
                <div className={s.inner_images_bp1280px}>
                    <div className={s.inner_images_bp1280px__family}></div>
                    <div className={s.inner_images_bp1280px__bulb}></div>
                    <div className={s.inner_images_bp1280px__family2}></div>
                    <div className={s.inner_images_bp1280px__robot}></div>
                </div>
            </MediaQuery.Desktop>
            <MediaQuery.Tablet>
                <div className={s.inner_images_bp768px}>
                    <div className={s.inner_images_bp768px__family}></div>
                    <div className={s.inner_images_bp768px__bulb}></div>
                    <div className={s.inner_images_bp768px__family2}></div>
                </div>
            </MediaQuery.Tablet>
            <MediaQuery.Mobile>
                <div className={s.inner_images_bp320px}></div>
            </MediaQuery.Mobile>
        </section>
    );
};

export default AuthPage;
