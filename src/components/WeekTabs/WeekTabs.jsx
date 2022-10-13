import CurrentWeekRange from 'components/CurrentWeekRange';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { commonActions } from 'redux/common/common.slice';
import commonSelectors from 'redux/common/selector.common';
import PropTypes, { shape } from 'prop-types';

import s from './weekTabs.module.scss';
const DAY_PARAM = 'day';
const WeekTabs = ({ weekDays, currentWeekRangeStr = null }) => {
    const storedDay = useSelector(commonSelectors.getCurrentDay);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams(); //{ day: storedDay }
    const currentDay = searchParams.get(DAY_PARAM);

    useEffect(() => {
        if (!weekDays.some(({ name }) => name === currentDay)) {
            setSearchParams({ day: storedDay });
        }
    }, [currentDay, setSearchParams, storedDay, weekDays]);

    const currentDate = useMemo(() => {
        return weekDays
            .find(({ name }) => name === currentDay)
            ?.date?.getTime();
    }, [currentDay, weekDays]);
    useEffect(() => {
        if (currentDate) {
            dispatch(
                commonActions.setCurrentDate(
                    new Date(currentDate).toISOString().split('T')[0]
                )
            );
        }
    }, [currentDate, dispatch]);

    return (
        <div className={s.wrapper}>
            {currentWeekRangeStr && (
                <CurrentWeekRange currentWeekRangeStr={currentWeekRangeStr} />
            )}
            <menu className={s.tabs}>
                {weekDays.map(({ date, name, title }) => (
                    <li
                        key={date}
                        className={
                            s.item + ' ' + (currentDay === name ? s.active : '')
                        }
                    >
                        <Link to={'?day=' + name} className={s.link}>
                            {title}
                        </Link>
                    </li>
                ))}
            </menu>
        </div>
    );
};

WeekTabs.propTypes = {
    weekDays: PropTypes.arrayOf(
        shape({
            date: PropTypes.instanceOf(Date),
            name: PropTypes.string,
            title: PropTypes.string,
        })
    ).isRequired,
    currentWeekRangeStr: PropTypes.string,
};

export default WeekTabs;
