import React, { useEffect, useRef, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
// import PropTypes from 'prop-types';
import s from './taskScheduleBtn.module.scss';
import CheckDay from '../CheckDay';
// import { inetialStateCheckDays } from '../CheckBox/CheckBox';
import { useDispatch, useSelector } from 'react-redux';
import tasksOperations from 'redux/tasks/operations.tasks';


const TaskScheduleBtn = ({ taskId }) => {
    const btnRef = useRef();
    const ref = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    
    

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



    




    const handleclick = () => {
        setIsModalOpen(prev => !prev);
        
        if (isModalOpen) {
            const id = btnRef.current.name;
            // dispatch(tasksOperations.setActiveSingle({id, daysBoolean}));
            
        }
    };

        return (
        <div ref={ref}>
            {isModalOpen ? (
                <button
                    ref={btnRef}
                    name={taskId}
                    type="button"
                    className={s.btn}
                    onClick={handleclick}
                >
                    ok
                </button>
            ) : (
                <button
                    ref={btnRef}
                    name={taskId}
                    type="button"
                    className={s.btn}
                    onClick={handleclick}
                >
                    <BsPlusLg color="#8EC63F" />
                </button>
            )}
            {isModalOpen && <CheckDay  id={taskId} 
            // handleChange={handleChange}
            />}
        </div>
    );
};

export default TaskScheduleBtn;

// TaskScheduleBtn.propTypes = {
//     isModalOpen: PropTypes.bool,
//     toggleModal: PropTypes.func.isRequired,
// };
