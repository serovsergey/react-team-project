import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import menuItems from '../UserInfo/menuItems';
import s from '../MobileMenu/mobileMenu.module.scss';
import { CgClose } from 'react-icons/cg';
import LoggedNav from 'components/LoggedNav';
import authSelectors from 'redux/auth/selector.auth';
import { useMediaQuery } from 'react-responsive'

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
                    <CgClose color='#ffffff' size={18}/>
                </button>
            </div>
            <ul className={s.list}>
                {menuItems.map(({ name, to }) => (
                    <li key={name} className={s.item}>
                        <NavLink to={to} className={s.link}>
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileMenu;
