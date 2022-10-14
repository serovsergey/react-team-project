import Card from 'components/common/Card';
import TaskCompletedInd from 'components/common/TaskCompletedInd';
import LoaderBig from 'components/LoaderBig';
import LoaderSmall from 'components/LoaderSmall';
import ToggleSwitch from 'components/toggleSwitch/ToggleSwitch';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasksOperations from 'redux/tasks/operations.tasks';
import tasksSelectors from 'redux/tasks/selector.tasks';
import userSelectors from 'redux/user/selector.user';
import PropTypes from 'prop-types';

import s from './cardList.module.scss';

const CardList = ({
    tasks,
    readOnly = false,
    notAvailable = false,
    currentDate,
}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(tasksSelectors.getIsLoading);
    const isPatching = useSelector(tasksSelectors.getIsPatching);
    const balance = useSelector(userSelectors.getUserBalance);
    const toggleRef = useRef(null);
    const handleToggle = async taskId => {
        try {
            toggleRef.current = taskId;
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
                    {!readOnly || (completed && reward > balance) ? (
                        <TaskCompletedInd isCompleted={completed} />
                    ) : isPatching && toggleRef.current === _id ? (
                        <LoaderSmall />
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

CardList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    readOnly: PropTypes.bool,
    notAvailable: PropTypes.bool,
    currentDate: PropTypes.instanceOf(Date).isRequired,
};

export default CardList;
