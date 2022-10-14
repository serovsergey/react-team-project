import s from '../SumOfPointsBox/sumOfPointsBox.module.scss'
import {useTranslation} from 'react-i18next'


const SumOfPointsBox = ({userRewards}) => {
    const {t} = useTranslation()

    return(
        <div className={s.pointsBox}>
            <p className={s.pointsTextFirst}>{t(`Определены задачи на`)}</p>
            &nbsp;
            <p className={s.pointsText}><span className={s.circle}>{userRewards}</span> &nbsp;{t(`балов`)}</p>
        </div>
    )
}

export default SumOfPointsBox
