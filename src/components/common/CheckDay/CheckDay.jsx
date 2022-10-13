import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import weekSelectors from 'redux/week/selector.week';
import CheckBox from '../CheckBox';
import s from './CheckDay.module.scss';

const CheckDay = () => {
    const weekDates = useSelector(weekSelectors.getWeekDates);
    //  const selectDayTasks = useSelector(tasksSelectors.selectDayTasks)
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
                            <li key={name} >
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
