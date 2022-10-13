import Logo from 'components/Logo';
// import UserInfo from 'components/UserInfo/UserInfo';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/selector.auth';
import s from '../Header/header.module.scss'
import { IoIosMenu} from 'react-icons/io';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import MobileMenu from 'components/MobileMenu';
import GuestNav from 'components/GuestNav';
import Container from 'components/Container';
import LoggedNav from 'components/LoggedNav';
import NavList from 'components/NavList';
import ScoreBox from 'components/ScoreBox';
// import { useTranslation } from 'react-i18next';
import ChangeLanguage from 'components/ChangeLanguage';



const Header = () => {
    // const { t } = useTranslation();
    
    const [modalIsopen, setModalIsOpen] = useState(false)
    const token = useSelector(authSelectors.getToken);
    const isDesktopScreen = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' })
    
    const handleCloseModal = () => {
        if(isDesktopScreen){
            return
        }
        setModalIsOpen(false)
    }
    

 return(
    <header className={s.header}>
        <Container>
        <div className={s.container}>
        <Logo />
                 {token && <ScoreBox />}
                 {isDesktopScreen && <ChangeLanguage/>}
        {token && isDesktopScreen && <NavList />}
        {token ? <><button type='button' onClick={() => setModalIsOpen(true)}className={s.button}>
            <IoIosMenu color="rgba(133, 133, 152, 1)"size={22} />
        </button> <div className={s.loggedWrapper}><LoggedNav /></div></> : <GuestNav />}
        </div>
        {modalIsopen && <MobileMenu closeModal={handleCloseModal}/>}
        </Container>
      </header>
 )



}

export default Header



