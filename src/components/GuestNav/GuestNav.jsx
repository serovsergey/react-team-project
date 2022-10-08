import s from '../GuestNav/guestNav.module.scss'
import { NavLink } from 'react-router-dom';



const GuestNav = () => {
    return (
        <div className={s.guestContainer}>
            <div key="autorisation" className={s.guestItem}>
                <NavLink to="/auth" className={s.guestLink}>
                    Log in
                </NavLink>
            </div>
            <div key="contacts" className={s.guestItem}>
                <NavLink to="/contacts" className={s.guestLink}>
                    Contacts
                </NavLink>
            </div>
        </div>
    );
};

export default GuestNav
