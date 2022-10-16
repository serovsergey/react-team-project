import React from 'react';
import { useSelector } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import s from './ProgressBarMobile.module.scss';
import weekSelectors from '../../redux/week/selector.week';
import { useTranslation } from 'react-i18next';

const ProgressBarMobile = () => {
    const { t } = useTranslation();
    const userPoints = useSelector(weekSelectors.getRewardsGained);
    const countPoints = useSelector(weekSelectors.getRewardsPlanned);
    let percent = 100;
    if (countPoints) {
        percent = parseInt((userPoints / countPoints) * 100);
    }
    if (userPoints === 0) {
        percent = 0;
    }

    return (
        <div className={s.wrap}>
            <p className={s.statsmobile}>{t('Points earned:')}</p>

            <div className={s.statsmobile__wrapper}>
                <span className={s.statsmobile__points}>
                    {userPoints}/{countPoints}
                </span>
                <Progress
                    percent={percent > 100 ? 100 : percent}
                    theme={{
                        success: {
                            color: 'rgb(223, 105, 180)',
                        },
                        active: {
                            color: '#9ECB44',
                            trailColor: '#E0E0E0',
                        },
                        default: {
                            trailColor: '#E0E0E0',
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressBarMobile;
