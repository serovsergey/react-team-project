import { useSelector } from 'react-redux';
import userSelectors from 'redux/user/selector.user';
import s from '../ScoreBox/scoreBox.module.scss';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from 'components/ChangeLanguage';
import { useMediaQuery } from 'react-responsive';

const ScoreBox = () => {
    const { t } = useTranslation();
    //  console.log(i18n)
    const userScore = useSelector(userSelectors.getUserBalance);
    const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <>
        <div className={s.scoreBox}>
            <p className={s.item}>
                {t(`Score`)}
                <br />
                {t(`balance:`)}
            </p>
            <p className={s.item}>{userScore}</p>
        {isTabletScreen && <div className={s.languageWrapper}><ChangeLanguage /></div>}
        </div>
        </>
    );
};

export default ScoreBox;
