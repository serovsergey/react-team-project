import { useSelector } from 'react-redux';
import s from '../LoggedNav/loggedNav.module.scss';
import { ReactComponent as LogoutIcon } from '../../assets/svg/logOut.svg';
import userSelectors from 'redux/user/selector.user';
import { useState } from 'react';
import LogOutModal from 'components/LogOutModal';

const LoggedNav = () => {
    const [logOutModal, setlogOutModal] = useState(false)
    const email = useSelector(userSelectors.getUserEmail);
    const nameSmall = email.split('@')[0];
    const name = nameSmall.charAt(0).toUpperCase() + nameSmall.slice(1);

    const handleCloseModal = () => {
        setlogOutModal(false)
    }

    return (
        <>
        <ul className={s.userInfo}>
            <li className={s.userItem}>
                <span className={s.iconName}>{name[0]}</span>
                {name}
            </li>
            <li className={s.userItem}>
                <button
                    type="button"
                    className={s.logoutBtn}
                    onClick={() => setlogOutModal(true)}
                >
                    <LogoutIcon className={s.icon} />
                </button>
            </li>
        </ul>
        {logOutModal && <LogOutModal onClose={handleCloseModal}/>}
        </>

    );
};

export default LoggedNav;
