/* eslint-disable no-unused-vars */
import React from 'react';

import s from './ProgressBar.module.scss';

const ProgressBar = () => {
    return (
        <div className={s.stats}>
            <p className={s.stats__progress}>
                {'Earned points this week'}
                <span className={s.stats__number}>"User Points"</span>
            </p>
            <p className={s.stats__totalprogress}>
                {'Total points this week'}
                <span className={s.stats__number}>"Count Points"</span>
            </p>
        </div>
    );
};
export default ProgressBar;
