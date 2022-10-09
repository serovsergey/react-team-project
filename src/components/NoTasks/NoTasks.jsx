import React from 'react';
// import PropTypes from 'prop-types';

import s from './noTasks.module.scss';
import { Link } from 'react-router-dom';

const NoTasks = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.noTasks}></div>
            <span className={s.message}>No tasks on this day</span>
            <Link to="/planning" className={s.link}>
                Schedule tasks
            </Link>
        </div>
    );
};

// NoTasks.propTypes = {};

export default NoTasks;
