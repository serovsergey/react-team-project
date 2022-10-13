import menuItems from './menuItems';
import { NavLink } from 'react-router-dom';
import s from '../NavList/navList.module.scss';
import {useTranslation} from 'react-i18next';

const NavList = ({ onClose }) => {

    const {t} = useTranslation()
    return (
        <ul className={s.list}>
            {menuItems.map(({ name, to, end }) => (
                <li key={name} className={s.item}>
                    <NavLink
                        to={to}
                        onClick={() => onClose && onClose()}
                        className={s.link}
                        end={end}
                    >
                        {t(name)}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavList;
