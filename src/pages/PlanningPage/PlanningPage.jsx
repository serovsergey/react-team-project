import Card from 'components/common/Card';
import TaskScheduleBtn from 'components/common/TaskScheduleBtn';
import React from 'react';
import {  useSelector } from 'react-redux';
import tasksSelectors from 'redux/tasks/selector.tasks';

// import PropTypes from 'prop-types';

import s from './planningPage.module.scss';

const PlanningPage = () => {
    const tasks = useSelector(tasksSelectors.getTasks);
    
    return (
        <>
            <h1 className={s.title}>Plan for the week:</h1>
            <ul>
                {tasks?.map(({ _id, title, reward, imageUrl }) => (
                    <li key={_id}>
                        <Card title={title} reward={reward} imageUrl={imageUrl}>
                            <TaskScheduleBtn
                                buttonId={_id}
                            />
                        </Card>
                    </li>
                ))}
            </ul>
        </>
    );
};

// PlanningPage.propTypes = {};

export default PlanningPage;
