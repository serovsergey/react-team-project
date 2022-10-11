import { useSelector } from 'react-redux';
import s from '../MobileMenu/mobileMenu.module.scss';
import { CgClose } from 'react-icons/cg';
import LoggedNav from 'components/LoggedNav';
import authSelectors from 'redux/auth/selector.auth';
import { useMediaQuery } from 'react-responsive'
import NavList from 'components/NavList';


const MobileMenu = ({ closeModal }) => {
    
    const token = useSelector(authSelectors.getToken);
    const isTabletScreen = useMediaQuery({ query: '(max-width: 767px)' })
    const isDesktopScreen = useMediaQuery({ query: '(min-width: 1280px)' })

    if(isDesktopScreen){
        return
    }
    return (
        <div className={s.menuContainer}>
            <div className={s.menuHeader}>
               {token && isTabletScreen && <LoggedNav />}
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
            <NavList onClose={closeModal} />
        </div>
    );
};

export default MobileMenu;
