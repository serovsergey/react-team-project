const getTasks = state => {
    return state.tasks.items?.map(({ _id, title, reward, imageUrl }) => ({
        _id,
        title,
        reward,
        imageUrl,
    }));
};

const tasksSelectors = {
    getTasks,
};

export default tasksSelectors;
