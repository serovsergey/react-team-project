import { useDispatch, useSelector } from 'react-redux'
import authOperations from 'redux/auth/operations.auth'
import s from '../LoggedNav/loggedNav.module.scss'
import authSelectors from 'redux/auth/selector.auth'
import {ReactComponent as LogoutIcon} from '../../assets/svg/logOut.svg';

const LoggedNav = () => {
    const dispatch = useDispatch()
    const email = useSelector(authSelectors.getEmail)
    const name = email.split("@")[0]
    

    return(
        <ul className={s.userInfo}>
                    <li className={s.userItem}><span className={s.iconName}>{name[0]}</span>{name}</li>
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
    )
}


export default LoggedNav