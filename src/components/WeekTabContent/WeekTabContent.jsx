import React from 'react';
import { useSelector } from 'react-redux';
import tasksSelectors from 'redux/tasks/selector.tasks';
// import PropTypes from 'prop-types';

import s from './weekTabContent.module.scss';

const WeekTabContent = props => {
    const tasks = useSelector(tasksSelectors.getTasks);
    return (
        <div>
            {tasks?.map(({ _id, title }) => (
                <div key={_id}>{title}</div>
            ))}
        </div>
    );
};

// WeekTabContent.propTypes = {};

export default WeekTabContent;
