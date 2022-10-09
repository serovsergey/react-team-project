import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import PropTypes from 'prop-types';
import s from './taskScheduleBtn.module.scss';

const TaskScheduleBtn = ({ isModalOpen = false, toggleModal }) => {

    return (
        <>
            {isModalOpen ? (
                <button type="button" className={s.btn} onClick={toggleModal}>
                    ok
                </button>
            ) : (
                <button type="button" className={s.btn} onClick={toggleModal}>
                    <BsPlusLg color="#8EC63F" />
                </button>
            )}
        </>
    );
};

export default TaskScheduleBtn;

TaskScheduleBtn.propTypes = {
    isModalOpen: PropTypes.bool,
    toggleModal: PropTypes.func.isRequired,
};
