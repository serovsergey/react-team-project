import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import weekSelectors from 'redux/week/selector.week';
// import PropTypes from 'prop-types';

import s from './weekTabs.module.scss';

const WeekTabs = props => {
    const weekDates = useSelector(weekSelectors.getWeekDates);
    const weekDays = useMemo(
        () =>
            weekDates.map(dt =>
                dt.toLocaleDateString('en-en', { weekday: 'long' })
            ),
        [weekDates]
    );
    // console.log(weekDates);

    return (
        <menu>
            {weekDays.map(day => (
                <li key={day}>{day}</li>
            ))}
        </menu>
    );
};

// WeekTabs.propTypes = {};

export default WeekTabs;
