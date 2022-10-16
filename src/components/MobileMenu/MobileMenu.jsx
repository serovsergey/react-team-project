import s from '../MobileMenu/mobileMenu.module.scss';
import NavList from 'components/NavList';
import LoggedNav from 'components/LoggedNav';
import authSelectors from 'redux/auth/selector.auth';
import ChangeLanguage from 'components/ChangeLanguage';
import { useSelector } from 'react-redux';
import { CgClose } from 'react-icons/cg';
import { useMediaQuery } from 'react-responsive'
import { createPortal } from 'react-dom';

const menuPortal = document.getElementById("modal2")

const MobileMenu = ({ closeModal }) => {
    
    const token = useSelector(authSelectors.getToken);
    const isToTabletScreen = useMediaQuery({ query: '(max-width: 767px)' })
    const isFromTabletScreen = useMediaQuery({ query: '(min-width: 768px)' })
    const isDesktopScreen = useMediaQuery({ query: '(min-width: 1280px)' })
    
    if(isDesktopScreen){
        return
    }
    return createPortal(
        <>
        <div className={s.overlay} onClick={closeModal}>
        </div>
        <div className={s.menuContainer}>
            <div className={s.menuHeader}>
               {token && isToTabletScreen && <LoggedNav />}
               {!token &&  closeModal()}
               {isDesktopScreen && closeModal()}
               
                <button
                    type="button"
                    onClick={() => closeModal()}
                    className={s.button}
                >
                    <CgClose  size={18} className={s.crossIcon}/>
                </button>
            </div>
            {!isFromTabletScreen && <ChangeLanguage />}
            <NavList onClose={closeModal} />
        </div>
        </>, menuPortal
        
    );
};

export default MobileMenu;
