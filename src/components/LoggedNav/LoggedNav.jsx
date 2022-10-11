import { useDispatch, useSelector } from 'react-redux';
import s from '../LoggedNav/loggedNav.module.scss';
import { ReactComponent as LogoutIcon } from '../../assets/svg/logOut.svg';
import userSelectors from 'redux/user/selector.user';
import { useState } from 'react';
import authOperations from 'redux/auth/operations.auth'
import Modal from 'components/common/Modal';

const LoggedNav = () => {
    const [logOutModal, setlogOutModal] = useState(false)
    const email = useSelector(userSelectors.getUserEmail);
    const nameSmall = email.split('@')[0];
    const name = nameSmall.charAt(0).toUpperCase() + nameSmall.slice(1);
    const dispatch = useDispatch();

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
        {logOutModal && 
            <Modal onClose={handleCloseModal}>
                <p className={s.text}>Are you sure?</p>
                <div className={s.buttonList}>
                    <button type="button" onClick={() => dispatch(authOperations.logout())}className={s.item}>yes</button>
                    <button type="button" onClick={() => setlogOutModal(false)}className={s.item}>cancel</button>
                </div>
            </Modal>}
        </>

    );
};

export default LoggedNav;
