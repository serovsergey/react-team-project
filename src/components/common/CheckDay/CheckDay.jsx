
import { useEffect, useMemo, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import weekSelectors from 'redux/week/selector.week';
import CheckBox from '../CheckBox';
import s from './CheckDay.module.scss';

const CheckDay = () => {
    const [isOpen, setIsOpen] = useState(true);
    const ref = useRef(null);
    const weekDates = useSelector(weekSelectors.getWeekDates);

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

    useEffect(() => {
        const handleClick = event => {
            // console.log(ref);
            // console.log(event.target);
            // console.log(ref.current?.contains(event.target));
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
            )}
        </>
    );
};

export default CheckDay;
