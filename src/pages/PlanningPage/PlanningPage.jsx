import Card from 'components/common/Card';
import TaskScheduleBtn from 'components/common/TaskScheduleBtn';
import Container from 'components/Container';
import CustomTaskBox from 'components/CustomTaskBox';
import SumOfPointsBox from 'components/SumOfPointsBox';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import tasksSelectors from 'redux/tasks/selector.tasks';
import userOperations from 'redux/user/operations.user';
import weekSelectors from 'redux/week/selector.week';

// import PropTypes from 'prop-types';

import s from './planningPage.module.scss';

const PlanningPage = () => {
    const tasks = useSelector(tasksSelectors.getTasks);
    const correntWeek = useSelector(weekSelectors.getCurrentWeekRange);
    const year = new Date().getFullYear();
    const rewardsPlanned = useSelector(state => state.week.rewardsPlanned)
    const dispatch = useDispatch()
    // const [open, setOpen] = useState(false);
    // useEffect(()=>{
    //     dispatch(userOperations.getUserInfo());
    // }, [])
    // useEffect(() => {


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
                        <SumOfPointsBox userRewards={rewardsPlanned}/>
                        <CustomTaskBox />
                    </div>

                    <ul className={s.list}>
                        {tasks?.map(({ _id, title, reward, imageUrl }) => (
                            <li
                                key={_id}
                                className={s.item}
                                // onBlur={e => {
                                //     console.log(e.relatedTarget);
                                //     if (
                                //         !e.currentTarget.contains(
                                //             e.relatedTarget
                                //         )
                                //     ) {
                                //         setOpen(true);
                                //     }
                                //     else {
                                //         setOpen(false);
                                //     }

                                // }}
                            >
                                <Card
                                    title={title}
                                    reward={reward}
                                    imageUrl={imageUrl}
                                >
                                    <TaskScheduleBtn
                                        buttonId={_id}
                                    />
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
