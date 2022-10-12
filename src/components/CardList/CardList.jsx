import Card from 'components/common/Card';
import TaskCompletedInd from 'components/common/TaskCompletedInd';
import LoaderBig from 'components/LoaderBig';
import ToggleSwitch from 'components/toggleSwitch/ToggleSwitch';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasksOperations from 'redux/tasks/operations.tasks';
import tasksSelectors from 'redux/tasks/selector.tasks';
// import PropTypes from 'prop-types';

import s from './cardList.module.scss';

const CardList = ({ tasks, readOnly, notAvailable, currentDate }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(tasksSelectors.getIsLoading);
    const handleToggle = async taskId => {
        try {
            await dispatch(
                tasksOperations.toggleCompleted({
                    taskId,
                    taskData: { date: currentDate.toISOString().split('T')[0] },
                })
            ).unwrap();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <ul className={s.wrapper}>
            {tasks?.map(({ _id, title, reward, imageUrl, completed }) => (
                <Card
                    key={_id}
                    title={title}
                    reward={reward}
                    imageUrl={imageUrl}
                >
                    {!readOnly ? (
                        <TaskCompletedInd isCompleted={completed} />
                    ) : (
                        !notAvailable && (
                            <ToggleSwitch
                                isChecked={completed}
                                taskId={_id}
                                onToggle={handleToggle}
                            />
                        )
                    )}
                </Card>
            ))}
            {isLoading && <LoaderBig />}
        </ul>
    );
};

// CardList.propTypes = {};

export default CardList;
