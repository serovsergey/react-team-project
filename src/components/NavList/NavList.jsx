import menuItems from './menuItems';
import { NavLink } from 'react-router-dom';
import s from '../NavList/navList.module.scss'


const NavList = () => {

    return(
        <ul className={s.list}>
                {menuItems.map(({ name, to }) => (
                    <li key={name} className={s.item}>
                        <NavLink to={to} className={s.link}>
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
    )
}


export default NavList