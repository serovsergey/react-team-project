import { Link } from 'react-router-dom';
import s from '../Logo/logo.module.scss'
import {ReactComponent as HeaderIcon} from '../../assets/svg/Hand-header.svg';



const Logo = () => {

    return(
        <Link to="/" className={s.logo}>KidsLike <span><HeaderIcon /></span></Link>
    )
}


export default Logo