// // import { toast } from 'react-toastify';

// import PropTypes from 'prop-types';

import AuthForm from 'components/AuthForm';
import Footer from 'components/Footer/Footer';

import s from './authPage.module.scss';

const AuthPage = props => {
    return (
        <section className={s.section_auth_page}>
            <h1 className={s.title}>
                Do your homework, get some great prizes!
            </h1>

            <AuthForm></AuthForm>

            <div className={s.wrapper_images}>
                <div className={s.inner_images_bp320px}></div>
                <div className={s.inner_images_bp768px}>
                    <div className={s.inner_images_bp768px__family}></div>
                    <div className={s.inner_images_bp768px__bulb}></div>
                    <div className={s.inner_images_bp768px__family2}></div>
                </div>
                <div className={s.inner_images_bp1280px}>
                    <div className={s.inner_images_bp1280px__family}></div>
                    <div className={s.inner_images_bp1280px__bulb}></div>
                    <div className={s.inner_images_bp1280px__family2}></div>
                    <div className={s.inner_images_bp1280px__robot}></div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

// AuthPage.propTypes = {};

export default AuthPage;
