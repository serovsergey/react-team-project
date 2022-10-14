import React, { useEffect, useRef, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
// import PropTypes from 'prop-types';
import s from './taskScheduleBtn.module.scss';
import CheckDay from '../CheckDay';
import { inetialStateCheckDays } from '../CheckBox/CheckBox';
import { useDispatch } from 'react-redux';
import tasksOperations from 'redux/tasks/operations.tasks';

const TaskScheduleBtn = ({ buttonId }) => {
    const btnRef = useRef();
    const ref = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClick = event => {
            // console.log(ref);
            // console.log(event.target);
            // console.log(ref.current?.contains(event.target));
            if (!ref.current?.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            setTimeout(() => {
                window.addEventListener('click', handleClick);
            }, 0);
        }
        return () => window.removeEventListener('click', handleClick);
    }, [isModalOpen]);

    const handleclick = () => {
        setIsModalOpen(prev => !prev);

        if (isModalOpen) {
            const id = btnRef.current.name;
            console.log(id);
            const taskData = inetialStateCheckDays;
            console.log(taskData);
            dispatch(tasksOperations.setActiveSingle({id, taskData}));
        }
    };

        return (
        <div ref={ref}>
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
        </div>
    );
};

export default TaskScheduleBtn;

// TaskScheduleBtn.propTypes = {
//     isModalOpen: PropTypes.bool,
//     toggleModal: PropTypes.func.isRequired,
// };
