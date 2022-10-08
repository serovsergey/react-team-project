import { useSelector } from 'react-redux'
import userSelectors from 'redux/user/selector.user'
import s from '../ScoreBox/scoreBox.module.scss'

const ScoreBox = () => {

    const userScore = useSelector(userSelectors.getUserBalance)
    
    return(
        <div className={s.scoreBox}>
            <p className={s.item}>Score<br/>balance:</p>
            <p className={s.item}>{userScore}</p>
        </div>
    )
}


export default ScoreBox