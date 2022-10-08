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

    return (
        <div className={s.menuContainer}>
            <div className={s.menuHeader}>
               {token && isTabletScreen && <LoggedNav />}
               {!token && closeModal()}
                <button
                    type="button"
                    onClick={() => closeModal()}
                    className={s.button}
                >
                    <CgClose color='#fff' size={18}/>
                </button>
            </div>
            <NavList />
        </div>
    );
};

export default MobileMenu;
