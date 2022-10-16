/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import { useTranslation } from 'react-i18next';

import s from './ProgressBar.module.scss';
import weekSelectors from '../../redux/week/selector.week';

const ProgressBar = ({ position = 'center' }) => {
    const getStyle = () => {
        return position === 'center' ? `${s.stats}` : `${s.stats} ${s.right}`;
    };
    const userPoints = useSelector(weekSelectors.getRewardsGained);
    const countPoints = useSelector(weekSelectors.getRewardsPlanned);
    let percent = 100;
    if (countPoints) {
        percent = parseInt((userPoints / countPoints) * 100);
    }
    if (userPoints === 0) {
        percent = 0;
    }
    const { t } = useTranslation();

    return (
        <div className={s.wrap}>
            <div className={getStyle()}>
                <p className={s.stats__progress}>
                    {t('Points earned this week:')}
                    <span className={s.stats__number}>{userPoints}</span>
                </p>
                <p className={s.stats__totalprogress}>
                    {t('Planned points for this week:')}
                    <span className={s.stats__number}>{countPoints}</span>
                </p>
            </div>
            <div className={s.wrap}>
                <div className={s.stats__wrapper}>
                    <span className={s.stats__points}>
                        {userPoints}/{countPoints}
                    </span>
                    <Progress
                        percent={percent > 100 ? 100 : percent}
                        theme={{
                            success: {
                                symbol: '',
                                color: 'rgb(223, 105, 180)',
                            },
                            active: {
                                symbol: '',
                                color: '#9ECB44',
                                trailColor: '#E0E0E0',
                            },
                            default: {
                                symbol: '',
                                trailColor: '#E0E0E0',
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default ProgressBar;
