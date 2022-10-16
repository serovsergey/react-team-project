import React, { useEffect, useRef, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import PropTypes from 'prop-types';
import s from './taskScheduleBtn.module.scss';
import CheckDay from '../CheckDay';
import { useDispatch, useSelector } from 'react-redux';
import tasksOperations from 'redux/tasks/operations.tasks';
import tasksSelectors from 'redux/tasks/selector.tasks';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import LoaderSmall from 'components/LoaderSmall';

const TaskScheduleBtn = ({ taskId }) => {
    const btnRef = useRef();
    const ref = useRef(null);
    const loaderRef = useRef(null);
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const isPatching = useSelector(tasksSelectors.getIsPatching);
    const taskStates = useSelector(tasksSelectors.selectTaskStatesById(taskId));
    const [daysState, setDaysState] = useState(taskStates);
    let currentWeekdayIndex = new Date().getDay();
    currentWeekdayIndex =
        currentWeekdayIndex === 0 ? 6 : currentWeekdayIndex - 1;

    const handleChange = idx => {
        if (idx >= currentWeekdayIndex) {
            setDaysState(prev =>
                prev.map((el, index) => (index === idx ? !el : el))
            );
        }
    };
    useEffect(() => {
        const handleClick = event => {
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

    const handleClick = () => {
        setIsModalOpen(prev => !prev);
        if (isModalOpen && taskStates.join('') !== daysState.join('')) {
            loaderRef.current = taskId;
            dispatch(
                tasksOperations.setActiveSingle({
                    taskId,
                    taskData: { days: daysState },
                })
            )
                .unwrap()
                .then(() => {
                    setDaysState(taskStates);
                    loaderRef.current = null;
                    toast.info(t('Task state changed!'));
                });
        } else {
            setDaysState(taskStates);
        }
    };

    return (
        <div ref={ref}>
            {isPatching && loaderRef.current === taskId ? (
                <LoaderSmall />
            ) : isModalOpen ? (
                <button
                    ref={btnRef}
                    type="button"
                    className={s.btn}
                    onClick={handleClick}
                >
                    OK
                </button>
            ) : (
                <button
                    ref={btnRef}
                    type="button"
                    className={s.btn}
                    onClick={handleClick}
                >
                    <BsPlusLg color="#8EC63F" />
                </button>
            )}
            {isModalOpen && (
                <CheckDay handleChange={handleChange} daysState={daysState} />
            )}
        </div>
    );
};

export default TaskScheduleBtn;

TaskScheduleBtn.propTypes = {
    taskId: PropTypes.string.isRequired,
};
