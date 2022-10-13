import { useSelector } from 'react-redux'
import userSelectors from 'redux/user/selector.user'
import s from '../ScoreBox/scoreBox.module.scss'
import { useTranslation } from 'react-i18next';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage'


const ScoreBox = () => {
    const { t, i18n } = useTranslation();
    //  console.log(i18n)
    const userScore = useSelector(userSelectors.getUserBalance)
    
    return(
        <div className={s.scoreBox}>
            <ChangeLanguage/>
            <p className={s.item}>{t(`Score`)}<br/>{t(`balance:`)}</p>
            <p className={s.item}>{userScore}</p>
        </div>
    )
}


export default ScoreBox