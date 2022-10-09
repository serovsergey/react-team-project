import WeekTabContent from 'components/WeekTabContent';
import WeekTabs from 'components/WeekTabs';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import userOperations from 'redux/user/operations.user';
import weekSelectors from 'redux/week/selector.week';
// import PropTypes from 'prop-types';

import s from './homePage.module.scss';

const HomePage = props => {
    const weekDates = useSelector(weekSelectors.getWeekDates);
    const currentWeekRange = useSelector(weekSelectors.getCurrentWeekRange);
    const dispatch = useDispatch();
    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    useEffect(() => {
        dispatch(userOperations.getUserInfo());
    }, [dispatch]);
    const weekDays = useMemo(
        () =>
            weekDates.map(dt => {
                const dayStr = dt.toLocaleDateString('en-en', {
                    weekday: 'long',
                });
                return {
                    name: dayStr,
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
