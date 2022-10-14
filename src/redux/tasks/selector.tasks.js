import { createSelector } from '@reduxjs/toolkit';

const selectAllTasks = state => state.tasks.items;

const getTasks = state => {
    return state.tasks.items?.map(({ _id, title, reward, imageUrl }) => ({
        _id,
        title,
        reward,
        imageUrl,
    }));
};
const selectTaskStatesById = taskId => state => {
    // console.log(taskId);
    return state.tasks.items
        ?.find(({ _id }) => _id === taskId)
        .days.map(({ isActive }) => isActive);
};

const selectDayTasks = createSelector(
    [selectAllTasks, (_, currentDate) => currentDate],
    (tasks, currentDate) => {
        return tasks?.reduce((acc, { _id, title, reward, imageUrl, days }) => {
            const activeTask = days.find(({ date, isActive }) => {
                return (
                    new Date(date).toISOString().split('T')[0] ===
                        currentDate.toISOString().split('T')[0] && isActive
                );
            });
            return activeTask
                ? [
                      ...acc,
                      {
                          _id,
                          title,
                          reward,
                          imageUrl,
                          completed: activeTask.isCompleted,
                      },
                  ]
                : acc;
        }, []);
    }
);

const getIsLoading = state => state.tasks.isLoading;
const getIsPatching = state => state.tasks.isPatching;
const getError = state => state.tasks.error;

const tasksSelectors = {
    selectAllTasks,
    getTasks,
    selectTaskStatesById,
    selectDayTasks,
    getIsPatching,
    getIsLoading,
    getError,
};

export default tasksSelectors;
