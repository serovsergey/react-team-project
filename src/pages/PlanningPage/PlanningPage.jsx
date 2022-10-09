import Card from 'components/common/Card';
import CheckDay from 'components/common/CheckDay';
import TaskScheduleBtn from 'components/common/TaskScheduleBtn';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasksSelectors from 'redux/tasks/selector.tasks';

// import PropTypes from 'prop-types';

import s from './planningPage.module.scss';

const PlanningPage = () => {
    const tasks = useSelector(tasksSelectors.getTasks);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
  
    
    const handleclick = e => {
        setIsModalOpen(prev => !prev)
        // console.log('click');
    };
    console.log(isModalOpen);


    
    return (
        <>
            <h1 className={s.title}>Plan for the week:</h1>
            <ul>
                {tasks?.map(({ _id, title, reward, imageUrl }) => (
                    <li key={_id}>
                        <Card title={title} reward={reward} imageUrl={imageUrl}>
                            <TaskScheduleBtn isModalOpen={isModalOpen}  toggleModal={handleclick} />
                            {isModalOpen && <CheckDay/>}
                        </Card>
                    </li>
                ))}
            </ul>
        </>
    );
};

// PlanningPage.propTypes = {};

export default PlanningPage;
