import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authOperations from 'redux/auth/operations.auth';
import menuItems from '../UserInfo/menuItems';
import s from '../MobileMenu/mobileMenu.module.scss';
// import Logo from 'components/Logo';
import { GrClose } from 'react-icons/gr';
import LoggedNav from 'components/LoggedNav';

const MobileMenu = ({ closeModal }) => {
    const dispatch = useDispatch();

    return (
        <div className={s.menuContainer}>
            <div className={s.menuHeader}>
                <LoggedNav />
                <button
                    type="button"
                    onClick={() => closeModal()}
                    className={s.button}
                >
                    <GrClose />
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
