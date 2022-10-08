import Button from 'components/common/Button';
import Card from 'components/common/Card';
// import TaskCompletedInd from 'components/common/TaskCompletedInd';
import TaskScheduleBtn from 'components/common/TaskScheduleBtn';
import React from 'react';
import ProgressBar from 'components/ProgressBar';
import ProgressBarMobile from 'components/ProgressBarMobile';
import { useMediaQuery } from 'react-responsive';

// import PropTypes from 'prop-types';

// import s from './awardsPage.module.scss';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1280 });
    return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
    return isMobile ? children : null;
};

const AwardsPage = props => {
    return (
        <div>
            AwardsPage
            <Button>TEST</Button>
            <Card>
                {/* <TaskCompletedInd /> */}
                <TaskScheduleBtn />
            </Card>
            <Desktop>
                <ProgressBar />
            </Desktop>
            <Tablet>
                <ProgressBar />
            </Tablet>
            <Mobile>
                <ProgressBarMobile />
            </Mobile>
        </div>
    );
};

// AwardsPage.propTypes = {};

export default AwardsPage;
