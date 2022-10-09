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
    const [searchParams, setSearchParams] = useSearchParams(storedDay);

    useEffect(() => {
        if (!searchParams.get(DAY_PARAM)) {
            setSearchParams({ day: storedDay });
        }
    }, [searchParams, setSearchParams, storedDay]);

    const handleSelectDay = day => {
        dispatch(commonActions.setCurrentDay(day));
    };

    const currentDay = searchParams.get(DAY_PARAM);
    return (
        <div className={s.wrapper}>
            {currentWeekRangeStr && (
                <CurrentWeekRange currentWeekRangeStr={currentWeekRangeStr} />
            )}
            <menu className={s.tabs}>
                {weekDays.map(({ name, title }) => (
                    <li
                        key={name}
                        // onClick={evt => handleSelectDay(evt, day)}
                        className={
                            s.item + ' ' + (currentDay === name ? s.active : '')
                        }
                    >
                        <Link
                            to={'?day=' + name}
                            className={s.link}
                            onClick={() => handleSelectDay(name)}
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
