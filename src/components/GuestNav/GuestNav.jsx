import s from '../GuestNav/guestNav.module.scss'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const GuestNav = () => {
    const {t} = useTranslation()
    return (
        <div className={s.guestContainer}>
            <div key="autorisation" className={s.guestItem}>
                <NavLink to="/auth" className={s.guestLink}>
                    {t("Login")}
                </NavLink>
            </div>
            <div key="contacts" className={s.guestItem}>
                <NavLink to="/contacts" className={s.guestLink}>
                    {t("Contacts")}
                </NavLink>
            </div>
        </div>
    );
};

export default GuestNav
