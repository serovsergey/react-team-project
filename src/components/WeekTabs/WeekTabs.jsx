import CurrentWeekRange from 'components/CurrentWeekRange';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { commonActions } from 'redux/common/common.slice';
import commonSelectors from 'redux/common/selector.common';
// import PropTypes from 'prop-types';

import s from './weekTabs.module.scss';
const DAY_PARAM = 'day';
const WeekTabs = ({ weekDays, currentWeekRangeStr = null }) => {
    const storedDay = useSelector(commonSelectors.getCurrentDay);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams({ day: storedDay });
    const currentDay = searchParams.get(DAY_PARAM);

    useEffect(() => {
        if (!weekDays.some(({ name }) => name === currentDay)) {
            // console.log('first');
            setSearchParams({ day: storedDay });
        }
    }, [currentDay, setSearchParams, storedDay, weekDays]);

    useEffect(() => {
        const currentDate = weekDays.find(
            ({ name }) => name === currentDay
        )?.date;
        if (currentDate) {
            dispatch(
                commonActions.setCurrentDate(
                    currentDate.toISOString().split('T')[0]
                )
            );
        }
    }, [currentDay, dispatch, weekDays]);

    const handleSelectDay = date => {
        // dispatch(
        //     commonActions.setCurrentDate(date.toISOString().split('T')[0])
        // );
    };
    return (
        <div className={s.wrapper}>
            {currentWeekRangeStr && (
                <CurrentWeekRange currentWeekRangeStr={currentWeekRangeStr} />
            )}
            <menu className={s.tabs}>
                {weekDays.map(({ date, name, title }) => (
                    <li
                        key={date}
                        // onClick={evt => handleSelectDay(evt, day)}
                        className={
                            s.item + ' ' + (currentDay === name ? s.active : '')
                        }
                    >
                        <Link
                            to={'?day=' + name}
                            className={s.link}
                            onClick={() => handleSelectDay(date)}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </menu>
        </div>
    );
};

// WeekTabs.propTypes = {};

export default WeekTabs;
