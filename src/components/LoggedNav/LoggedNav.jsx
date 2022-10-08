import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/operations.auth';
import s from '../LoggedNav/loggedNav.module.scss';
import { ReactComponent as LogoutIcon } from '../../assets/svg/logOut.svg';
import userSelectors from 'redux/user/selector.user';

const LoggedNav = () => {
    const dispatch = useDispatch();
    const email = useSelector(userSelectors.getUserEmail);
    const nameSmall = email.split('@')[0];
    const name = nameSmall.charAt(0).toUpperCase() + nameSmall.slice(1);

    return (
        <ul className={s.userInfo}>
            <li className={s.userItem}>
                <span className={s.iconName}>{name[0]}</span>
                {name}
            </li>
            <li className={s.userItem}>
                <button
                    type="button"
                    className={s.logoutBtn}
                    onClick={() => dispatch(authOperations.logout())}
                >
                    <LogoutIcon className={s.icon} />
                </button>
            </li>
        </ul>
    );
};

export default LoggedNav;
