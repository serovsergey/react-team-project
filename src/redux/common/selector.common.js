const getCurrentDate = state => new Date(state.common.currentDate);
const getCurrentDay = state =>
    new Date(state.common.currentDate)
        .toLocaleDateString('en', { weekday: 'long' })
        .toLowerCase();

const commonSelectors = {
    getCurrentDate,
    getCurrentDay,
};

export default commonSelectors;
