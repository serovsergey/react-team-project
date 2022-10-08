import Button from 'components/common/Button';
import Card from 'components/common/Card';
// import TaskCompletedInd from 'components/common/TaskCompletedInd';
import TaskScheduleBtn from 'components/common/TaskScheduleBtn';
import React from 'react';
// import PropTypes from 'prop-types';

// import s from './awardsPage.module.scss';

const AwardsPage = props => {
    return (
        <div>
            AwardsPage
            <Button>TEST</Button>
            <Card>
                {/* <TaskCompletedInd /> */}
                <TaskScheduleBtn />
            </Card>
        </div>
    );
};

// AwardsPage.propTypes = {};

export default AwardsPage;
