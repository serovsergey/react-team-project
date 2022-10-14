import { useEffect, useMemo, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import tasksSelectors from 'redux/tasks/selector.tasks';
import weekSelectors from 'redux/week/selector.week';
import CheckBox from '../CheckBox';
import s from './CheckDay.module.scss';

const CheckDay = (
    // {handleChange }
    ) => {
 
    const [isOpen, setIsOpen] = useState(true);
    const ref = useRef(null);
    const weekDates = useSelector(weekSelectors.getWeekDates);

    const taskStates = useSelector(tasksSelectors.selectTaskStatesById(
        // taskId
        ));
    const [daysBoolean, setDaysBoolean] = useState(taskStates);
    
    const handleChange = idx => {
        setDaysBoolean(prev => {
            const a = prev.map((el, index) => {
                return index === idx ? !el : el;
            });
            return a;
        });
    };

    const { i18n } = useTranslation();

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

    useEffect(() => {
        const handleClick = event => {
            if (!ref.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            setTimeout(() => {
                window.addEventListener('click', handleClick);
            }, 0);
        }
        return () => window.removeEventListener('click', handleClick);
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div className={s.weekBox} ref={ref}>
                    <form action="">
                        <ul>
                            {weekDays?.map(({ name, title }, idx) => (
                                <li key={name}>
                                    <CheckBox
                                        title={title}
                                        handleChange={handleChange}
                                        checked={daysBoolean[idx]}
                                        idx={idx}
                                    />
                                </li>
                            ))}
                        </ul>
                    </form>
                </div>
            )}
        </>
    );
};

export default CheckDay;
