import { useSelector } from 'react-redux'
import userSelectors from 'redux/user/selector.user'
import s from '../ScoreBox/scoreBox.module.scss'
import { useTranslation } from 'react-i18next';


const ScoreBox = () => {
    const { t } = useTranslation();
    //  console.log(i18n)
    const userScore = useSelector(userSelectors.getUserBalance)

    return(
        <div className={s.scoreBox}>
            <p className={s.item}>{t(`Score`)}<br/>{t(`balance:`)}</p>
            <p className={s.item}>{userScore}</p>
        </div>
    )
}


export default ScoreBox
