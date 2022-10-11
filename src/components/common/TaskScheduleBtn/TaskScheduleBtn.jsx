import React, { useEffect, useRef, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
// import PropTypes from 'prop-types';
import s from './taskScheduleBtn.module.scss';
import CheckDay from '../CheckDay';

const TaskScheduleBtn = ({ buttonId }) => {
    const btnRef = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const name = btnRef.current.name;
        console.log(name);
    });

    const handleclick = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <>
            {isModalOpen ? (
                <button
                    ref={btnRef}
                    name={buttonId}
                    type="button"
                    className={s.btn}
                    onClick={handleclick}
                >
                    ok
                </button>
            ) : (
                <button
                    ref={btnRef}
                    name={buttonId}
                    type="button"
                    className={s.btn}
                    onClick={handleclick}
                >
                    <BsPlusLg color="#8EC63F" />
                </button>
            )}
            {isModalOpen && <CheckDay />}
        </>
    );
};

export default TaskScheduleBtn;

// TaskScheduleBtn.propTypes = {
//     isModalOpen: PropTypes.bool,
//     toggleModal: PropTypes.func.isRequired,
// };
