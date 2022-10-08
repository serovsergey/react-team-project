import Button from 'components/common/Button';
import TaskCompletedInd from 'components/common/TaskCompletedInd';
import TaskScheduleBtn from 'components/common/TaskScheduleBtn';
import React from 'react';
// import PropTypes from 'prop-types';

// import s from './awardsPage.module.scss';

const AwardsPage = props => {
    return (
        <div>
            AwardsPage
            <TaskCompletedInd />
            <TaskScheduleBtn />
            <Button>TEST</Button>
        </div>
    );
};

// AwardsPage.propTypes = {};

export default AwardsPage;
