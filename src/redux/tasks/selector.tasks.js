const getTasks = state => {
    return state.tasks.items?.map(({ _id, title, reward, imageUrl }) => ({
        _id,
        title,
        reward,
        imageUrl,
    }));
};
const getIsLoading = state => state.tasks.isLoading;
const getError = state => state.tasks.error;

const tasksSelectors = {
    getTasks,
    getIsLoading,
    getError,
};

export default tasksSelectors;
