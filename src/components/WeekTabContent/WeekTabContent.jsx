import CardList from 'components/CardList';
import CurrentWeekRange from 'components/CurrentWeekRange';
import ProgressBar from 'components/ProgressBar';
import React from 'react';
import { useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
import tasksSelectors from 'redux/tasks/selector.tasks';
// import PropTypes from 'prop-types';

// import s from './weekTabContent.module.scss';

const WeekTabContent = ({ currentWeekRangeStr }) => {
    // const [searchParams, setSearchParams] = useSearchParams();

    const tasks = useSelector(tasksSelectors.getTasks);
    return (
        <div>
            {currentWeekRangeStr && (
                <CurrentWeekRange currentWeekRangeStr={currentWeekRangeStr} />
            )}
            <ProgressBar />
            <CardList tasks={tasks} />
        </div>
    );
};

// WeekTabContent.propTypes = {};

export default WeekTabContent;
