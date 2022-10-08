import Logo from 'components/Logo';
// import UserInfo from 'components/UserInfo/UserInfo';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/selector.auth';
import s from '../Header/header.module.scss'
import { IoIosMenu} from 'react-icons/io';
import { useState } from 'react';
import MobileMenu from 'components/MobileMenu';
import GuestNav from 'components/GuestNav';
import Container from 'components/Container';



const Header = () => {
    const [modalIsopen, setModalIsOpen] = useState(false)
    // const token = useSelector(authSelectors.getToken);
    const token = true
    
    const handleCloseModal = () => {
        setModalIsOpen(false)
    }

 return(
    <header className={s.header}>
        <Container>
        <div className={s.container}>
        <Logo />
        {token ? <button type='button' onClick={() => setModalIsOpen(true)}className={s.button}>
            <IoIosMenu size={22} />
        </button> : <GuestNav />}
        </div>
        {modalIsopen && <MobileMenu closeModal={handleCloseModal}/>}
        </Container>
      </header>
 )



}

export default Header



