import WeekTabContent from 'components/WeekTabContent';
import WeekTabs from 'components/WeekTabs';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import weekSelectors from 'redux/week/selector.week';

// import PropTypes from 'prop-types';

import s from './homePage.module.scss';

const HomePage = props => {
    const weekDates = useSelector(weekSelectors.getWeekDates);
    const currentWeekRange = useSelector(weekSelectors.getCurrentWeekRange);

    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const weekDays = useMemo(
        () =>
            weekDates.map(dt => {
                const dayStr = dt.toLocaleDateString('en-US', {
                    weekday: 'long',
                });
                return {
                    date: dt,
                    name: dayStr.toLowerCase(),
                    title: isDesktop ? dayStr : dayStr.slice(0, 2),
                };
            }),
        [isDesktop, weekDates]
    );
    // console.log(isDesktop);
    return (
        <div className={s.wrapper}>
            <WeekTabs
                weekDays={weekDays}
                currentWeekRangeStr={
                    !isMobile && !isDesktop ? currentWeekRange : null
                }
            />
            <WeekTabContent
                currentWeekRangeStr={
                    isMobile || isDesktop ? currentWeekRange : null
                }
            />
        </div>
    );
};

// HomePage.propTypes = {};

export default HomePage;
