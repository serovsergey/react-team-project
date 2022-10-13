import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import tasksSelectors from 'redux/tasks/selector.tasks';
import weekSelectors from 'redux/week/selector.week';
import CheckBox from '../CheckBox';
import s from './CheckDay.module.scss';

const CheckDay = () => {
    const weekDates = useSelector(weekSelectors.getWeekDates);
    //    const selectDayTasks = useSelector(tasksSelectors.selectDayTasks)
    const { t, i18n } = useTranslation();

    const weekDays = useMemo(
        () =>
            weekDates.map(dt => {
                const dayStr = dt.toLocaleDateString(i18n.language, {
                    weekday: 'long',
                });
                return {
                    name: dayStr,
                    title: dayStr.slice(0, 2),
                };
            }),
        [i18n.language, weekDates]
    );

    return (
        <>
            <div className={s.weekBox}>
                <form action="">
                    <ul>
                        {weekDays?.map(({ name, title }) => (
                            <li key={name}>
                                <label className={s.label}>
                                    <CheckBox
                                        className={s.checkBox}
                                        id={name}
                                    />
                                    <span className={s.day}>{title}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </form>
            </div>
        </>
    );
};

export default CheckDay;
