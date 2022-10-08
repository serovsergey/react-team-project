import { Link } from 'react-router-dom';
import s from '../Logo/logo.module.scss'



const Logo = () => {

    return(
        <Link to="/" className={s.logo}>KidsLike</Link>
    )
}


export default Logo