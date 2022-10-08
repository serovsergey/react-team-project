import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import PropTypes from 'prop-types';
import s from './taskScheduleBtn.module.scss';

const TaskScheduleBtn = ({ isModalOpen = false, toggleModal }) => {
    return (
        <>
            {isModalOpen ? (
                <span className={s.btn} onClick={toggleModal}>
                    ok
                </span>
            ) : (
                <span className={s.btn} onClick={toggleModal}>
                    <BsPlusLg color="#8EC63F" />
                </span>
            )}
        </>
    );
};

export default TaskScheduleBtn;

TaskScheduleBtn.propTypes = {
    isModalOpen: PropTypes.bool,
    toggleModal: PropTypes.func.isRequired,
};
