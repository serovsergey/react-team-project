import React, { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
// import PropTypes from 'prop-types';

import s from './currentDay.module.scss';

const CurrentDay = ({ currentDate }) => {
    const isDesktop = useMediaQuery({ minWidth: 1280 });

    const formattedDate = useMemo(() => {
        const dayOfWeek = currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
        });
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        return `${
            isDesktop ? dayOfWeek.toUpperCase() : dayOfWeek
        }, ${day}-${month}-${year}`;
    }, [currentDate, isDesktop]);

    return (
        <div className={s.wrapper}>
            <span className={s.label}>My tasks: </span>
            <span className={s.date}>{formattedDate}</span>
        </div>
    );
};

// CurrentDay.propTypes = {};

export default CurrentDay;
