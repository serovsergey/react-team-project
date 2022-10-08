import { Link } from 'react-router-dom';
import s from '../Logo/logo.module.scss'
import {ReactComponent as HeaderIcon} from '../../assets/svg/Hand-header.svg';



const Logo = () => {

    return(
        <Link to="/" className={s.logo}><p className={s.text}>KidsLike</p><HeaderIcon /></Link>
    )
}


export default Logo