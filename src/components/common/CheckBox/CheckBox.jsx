import { useRef, useState, useEffect } from 'react';
import s from './CheckBox.module.scss';
import { ReactComponent as Vector } from '../../../assets/svg/Vector-Chek.svg';
import { ReactComponent as Checkbox } from '../../../assets/svg/Checkbox.svg';

export const inetialStateCheckDays = {
    days: [false, false, false, false, false, false, false],
};

const CheckBox = ({ id }) => {
    const [isShow, setIsShow] = useState(false);
    const [boolean, setBoolean] = useState(false);
    const btnRef = useRef();
    const { days } = inetialStateCheckDays;

    useEffect(() => {
        const name = btnRef.current.id;

        if (name === 'Monday') {
            setBoolean(prev => !prev);
            days.splice(0, 1, boolean);
        }
        if (name === 'Tuesday') {
            setBoolean(prev => !prev);
            days.splice(1, 1, boolean);
        }
        if (name === 'Wednesday') {
            setBoolean(prev => !prev);
            days.splice(2, 1, boolean);
        }
        if (name === 'Thursday') {
            setBoolean(prev => !prev);
            days.splice(3, 1, boolean);
        }
        if (name === 'Friday') {
            setBoolean(prev => !prev);
            days.splice(4, 1, boolean);
        }
        if (name === 'Saturday') {
            setBoolean(prev => !prev);
            days.splice(5, 1, boolean);
        }
        if (name === 'Sunday') {
            setBoolean(prev => !prev);
            days.splice(6, 1, boolean);
        }

        console.log(days);
    }, [isShow, days, boolean]);

    const handleChange = e => {
        setIsShow(prev => !prev);
    };

    return (
        <>
            {!isShow && <Checkbox />}
            {isShow && <Vector />}
            <input
                type="checkbox"
                name="day"
                id={id}
                onChange={handleChange}
                className={s.check}
                ref={btnRef}
            />
        </>
    );
};

export default CheckBox;
