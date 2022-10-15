import { useSelector } from 'react-redux';
<<<<<<< HEAD
// import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/selector.auth';
import s from '../Header/header.module.scss';
import { IoIosMenu } from 'react-icons/io';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
=======
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MediaQuery } from 'hooks/useMediaQuery';
import { IoIosMenu } from 'react-icons/io';
import s from '../Header/header.module.scss';
import authSelectors from 'redux/auth/selector.auth';
import Logo from 'components/Logo';
>>>>>>> dev
import MobileMenu from 'components/MobileMenu';
import GuestNav from 'components/GuestNav';
import Container from 'components/Container';
import LoggedNav from 'components/LoggedNav';
import NavList from 'components/NavList';
import ScoreBox from 'components/ScoreBox';
import ChangeLanguage from 'components/ChangeLanguage';

const Header = () => {
<<<<<<< HEAD
    // const { t } = useTranslation();
=======
>>>>>>> dev

    const [modalIsopen, setModalIsOpen] = useState(false);
    const token = useSelector(authSelectors.getToken);
    const isDesktopScreen = useMediaQuery({ query: '(min-width: 1280px)' });
<<<<<<< HEAD
    // const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' })
=======
>>>>>>> dev

    const handleCloseModal = () => {
        if (isDesktopScreen) {
            return;
        }
        setModalIsOpen(false);
    };
<<<<<<< HEAD

    return (
        <header className={s.header}>
            <Container>
                <div className={s.container}>
                    <Logo />
                    {token && <ScoreBox />}
                    {isDesktopScreen && <ChangeLanguage />}
                    {token && isDesktopScreen && <NavList />}
=======

    return (
        <header className={s.header}>
            <Container>
                <div className={s.container}>
                    <Logo />
                    {token && <ScoreBox />}
                    <MediaQuery.Desktop>
                        <ChangeLanguage />
                    </MediaQuery.Desktop>

                    {token &&
                    <MediaQuery.Desktop>
                         <NavList />
                    </MediaQuery.Desktop>}

>>>>>>> dev
                    {token ? (
                        <>
                            <button
                                type="button"
                                onClick={() => setModalIsOpen(true)}
                                className={s.button}
                            >
<<<<<<< HEAD
                                <IoIosMenu
                                    color="rgba(133, 133, 152, 1)"
=======
                                <IoIosMenu 
                                    className={s.iconMenu}
>>>>>>> dev
                                    size={22}
                                />
                            </button>{' '}
                            <div className={s.loggedWrapper}>
                                <LoggedNav />
                            </div>
                        </>
                    ) : (
                        <GuestNav />
                    )}
                </div>
                {modalIsopen && <MobileMenu closeModal={handleCloseModal} />}
            </Container>
        </header>
    );
};

export default Header;
