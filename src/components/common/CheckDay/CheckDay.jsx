import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import weekSelectors from 'redux/week/selector.week';
import CheckBox from '../CheckBox';
import s from './CheckDay.module.scss';

const CheckDay = ({ daysState, handleChange }) => {
    const [isOpen, setIsOpen] = useState(true);
    const ref = useRef(null);
    const { i18n } = useTranslation();
    let currentWeekdayIndex = new Date().getDay();
    currentWeekdayIndex =
        currentWeekdayIndex === 0 ? 6 : currentWeekdayIndex - 1;

    const weekDays = useSelector(state =>
        weekSelectors.selectWeekDays(state, i18n.language)
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
                    <ul>
                        {weekDays?.map(({ name, titleShort }, idx) => (
                            <li key={name}>
                                <CheckBox
                                    title={titleShort}
                                    handleChange={() => handleChange(idx)}
                                    checked={daysState[idx]}
                                    idx={idx}
                                    disabled={idx < currentWeekdayIndex}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default CheckDay;

CheckDay.propTypes = {
    daysState: PropTypes.arrayOf(PropTypes.bool).isRequired,
    handleChange: PropTypes.func.isRequired,
};
