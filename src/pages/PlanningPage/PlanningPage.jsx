import Card from 'components/common/Card';
import TaskScheduleBtn from 'components/common/TaskScheduleBtn';
import Container from 'components/Container';
import CustomTaskBox from 'components/CustomTaskBox';
import Footer from 'components/Footer';
import SumOfPointsBox from 'components/SumOfPointsBox';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import tasksSelectors from 'redux/tasks/selector.tasks';

import weekSelectors from 'redux/week/selector.week';

import PropTypes from 'prop-types';

import s from './planningPage.module.scss';

const PlanningPage = () => {
    const { t } = useTranslation();
    const tasks = useSelector(tasksSelectors.getTasks);
    const currentWeek = useSelector(weekSelectors.getCurrentWeekRangeEx);
    const rewardsPlanned = useSelector(weekSelectors.getRewardsPlanned);
    return (
        <>
            <Container>
                <div>
                    <div className={s.wrapper}>
                        <div className={s.date}>
                            <h1 className={s.title}>
                                {t('Plan for the week:')}
                            </h1>
                            <p className={s.week}>{currentWeek}</p>
                        </div>
                        <SumOfPointsBox userRewards={rewardsPlanned} />
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
                                    <TaskScheduleBtn taskId={_id} />
                                </Card>
                            </li>
                        ))}
                    </ul>
                </div>
                <Footer />
            </Container>
        </>
    );
};

PlanningPage.propTypes = {
    tasks: PropTypes.shape({
        _id:PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        reward: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }),
    currentWeek:PropTypes.string,
    rewardsPlanned: PropTypes.number,
};

export default PlanningPage;
