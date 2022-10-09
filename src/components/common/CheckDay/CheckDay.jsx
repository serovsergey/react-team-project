import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import weekSelectors from 'redux/week/selector.week';
import s from './CheckDay.module.scss';

const CheckDay = () => {
    const weekDates = useSelector(weekSelectors.getWeekDates);
    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    


    const weekDays = useMemo(
        () =>
            weekDates.map(dt => {
                const dayStr = dt.toLocaleDateString('en-en', {
                    weekday: 'long',
                });
                return {
                    name: dayStr,
                    title: dayStr.slice(0, 2),
                };
            }),
        [weekDates]
    );

        return (
        <>
            <div className={s.weekBox}>
                <form action="">
                    <ul>
                        {weekDays?.map(({ name, title }) => (
                            <li key={name}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="day"
                                    value={name}
                                />
                                <span className={s.day}>{title}</span>
                            </label>
                            </li>)
                        )}
                        
                    </ul>
                </form>
            </div>
        </>
    );
};

export default CheckDay;
