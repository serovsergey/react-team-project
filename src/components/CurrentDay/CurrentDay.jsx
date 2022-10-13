import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
// import PropTypes from 'prop-types';

import s from './currentDay.module.scss';

const CurrentDay = ({ currentDate }) => {
    const { t, i18n } = useTranslation();
    const isDesktop = useMediaQuery({ minWidth: 1280 });

    const formattedDate = useMemo(() => {
        let dayOfWeek = currentDate.toLocaleDateString(i18n.language, {
            weekday: 'long',
        });
        dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        return `${
            isDesktop ? dayOfWeek.toUpperCase() : dayOfWeek
        }, ${day}-${month}-${year}`;
    }, [currentDate, i18n.language, isDesktop]);

    return (
        <div className={s.wrapper}>
            <span className={s.label}>My tasks: </span>
            <span className={s.date}>{formattedDate}</span>
        </div>
    );
};

// CurrentDay.propTypes = {};

export default CurrentDay;
