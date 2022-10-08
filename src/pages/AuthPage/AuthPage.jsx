// // import { toast } from 'react-toastify';

// import PropTypes from 'prop-types';

import AuthForm from 'components/AuthForm';
// import Container from 'components/Container';
import Footer from 'components/Footer/Footer';
import { useMediaQuery } from 'react-responsive';

import s from './authPage.module.scss';

const AuthPage = props => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1280 });
        return isDesktop ? children : null;
    };
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
        return isTablet ? children : null;
    };
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
        return isMobile ? children : null;
    };

    return (
        // <Container>
        <section className={s.section_auth_page}>
            <h1 className={s.title}>
                Do your homework, get some great prizes!
            </h1>

            <AuthForm></AuthForm>

            {/* <div className={s.wrapper_images}> */}
            <Footer></Footer>
            <Desktop>
                <div className={s.inner_images_bp1280px}>
                    <div className={s.inner_images_bp1280px__family}></div>
                    <div className={s.inner_images_bp1280px__bulb}></div>
                    <div className={s.inner_images_bp1280px__family2}></div>
                    <div className={s.inner_images_bp1280px__robot}></div>
                </div>
            </Desktop>
            <Tablet>
                <div className={s.inner_images_bp768px}>
                    <div className={s.inner_images_bp768px__family}></div>
                    <div className={s.inner_images_bp768px__bulb}></div>
                    <div className={s.inner_images_bp768px__family2}></div>
                </div>
            </Tablet>
            <Mobile>
                <div className={s.inner_images_bp320px}></div>
            </Mobile>
            {/* </div> */}
        </section>
        // </Container>
    );
};

// AuthPage.propTypes = {};

export default AuthPage;
