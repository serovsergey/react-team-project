import s from '../SumOfPointsBox/sumOfPointsBox.module.scss'
import {useTranslation} from 'react-i18next'


const SumOfPointsBox = () => {
    const {t} = useTranslation()

    return(
        <div className={s.pointsBox}>
            <p className={s.pointsTextFirst}>{t(`Определены задачи на`)}</p>
            &nbsp;
            <p className={s.pointsText}><span className={s.circle}>20</span> &nbsp;{t(`балов`)}</p>
        </div>
    )
}

export default SumOfPointsBox
