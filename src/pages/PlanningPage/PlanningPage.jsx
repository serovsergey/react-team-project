import Card from 'components/common/Card';
import TaskScheduleBtn from 'components/common/TaskScheduleBtn';
import Container from 'components/Container';
import CustomTaskBox from 'components/CustomTaskBox';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import tasksSelectors from 'redux/tasks/selector.tasks';
import weekSelectors from 'redux/week/selector.week';

// import PropTypes from 'prop-types';

import s from './planningPage.module.scss';

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

const PlanningPage = () => {
    const tasks = useSelector(tasksSelectors.getTasks);
    const correntWeek = useSelector(weekSelectors.getCurrentWeekRange);
    const year = new Date().getFullYear();

    return (
        <>
            <Container>
                <div>
                    <div className={s.wrapper}>
                        <div className={s.date}>
                            <h1 className={s.title}>Plan for the week:</h1>
                            <p className={s.week}>
                                {correntWeek} {year}
                            </p>
                        </div>
                        <CustomTaskBox />
                    </div>

                    <ul className={s.list}>
                        {tasks?.map(({ _id, title, reward, imageUrl }) => (
                            <li key={_id} className={s.item}>
                                <Card
                                    title={title}
                                    reward={reward}
                                    imageUrl={imageUrl}
                                >
                                    <TaskScheduleBtn buttonId={_id} />
                                </Card>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </>
    );
};

// PlanningPage.propTypes = {};

export default PlanningPage;
