import { useDispatch } from 'react-redux'
import authOperations from 'redux/auth/operations.auth'
import s from '../LoggedNav/loggedNav.module.scss'
import { IoMdExit } from 'react-icons/io';


const LoggedNav = () => {
    const dispatch = useDispatch()

    return(
        <ul className={s.userInfo}>
                    <li className={s.userItem}>Email</li>
                    <li className={s.userItem}>
                        <button
                            type="button"
                            className={s.logoutBtn}
                            onClick={() => dispatch(authOperations.logout())}
                        >
                            <IoMdExit size={14} />
                        </button>
                    </li>
                </ul>
    )
}


export default LoggedNav