import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasksSelectors from 'redux/tasks/selector.tasks';
// import PropTypes from 'prop-types';

// import s from './homePage.module.scss';

const HomePage = props => {
    const tasks = useSelector(tasksSelectors.getTasks);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     // dispatch(authSlice)
    // }, []);
    return (
        <div>
            {tasks?.map(({ _id, title }) => (
                <div key={_id}>{title}</div>
            ))}
        </div>
    );
};

// HomePage.propTypes = {};

export default HomePage;
