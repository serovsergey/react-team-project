import { useRef, useState } from 'react';
import s from './CheckBox.module.scss';
import { ReactComponent as Vector } from '../../../assets/svg/Vector-Chek.svg';
import { ReactComponent as Checkbox } from '../../../assets/svg/Checkbox.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const inetialState = {
    days: [false, false, false, false, false, false, false],
};

const CheckBox = ({ id }) => {
    const [isShow, setIsShow] = useState(false);
    const [boolean, setBoolean] = useState(false);
    const btnRef = useRef();
    const dispatch = useDispatch()
    const { days } =  inetialState;

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
    }, [isShow, days]);

    const handleChange = e => {
        setIsShow(prev => !prev);

        // if (e.target.value === 'on') {
        //     setIsShow(prev => !prev);
        // }
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
