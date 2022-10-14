import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { BsExclamation } from 'react-icons/bs';

// import PropTypes from 'prop-types';

import s from './taskCompletedInd.module.scss';

const TaskCompletedInd = ({ isCompleted = false }) => {
    const getStyle = () => {
        return isCompleted ? `${s.completed}` : `${s.uncompleted}`;
    };

    return (
        <div>
            <span className={getStyle()}>
                {isCompleted ? (
                    <IoMdCheckmark color="#fff" size={20} />
                ) : (
                    <BsExclamation color="#fff" size={25} />
                )}
            </span>
        </div>
    );
};

export default TaskCompletedInd;

// TaskCompletedInd.propTypes = {
//     isCompleted: PropTypes.bool,
// };
