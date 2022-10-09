const getStartWeekDate = state => state.week.startWeekDate;
const getEndWeekDate = state => state.week.endWeekDate;
const getRewardsGained = state => state.week.rewardsGained;
const getRewardsPlanned = state => state.week.rewardsPlanned;
const getIsLoading = state => state.week.isLoading;
const getError = state => state.week.error;

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
const getWeekDates = state => {
    const startDate = new Date(state.week.startWeekDate);
    const endDate = new Date(state.week.endWeekDate);
    const dateArray = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
        dateArray.push(new Date(currentDate));
        currentDate = addDays(currentDate, 1);
    }
    return dateArray;
};

const getCurrentWeekRange = state => {
    const startDate = new Date(state.week.startWeekDate);
    const startMonth = startDate.toLocaleString('en-en', { month: 'long' });
    const endDate = new Date(state.week.endWeekDate);
    const endMonth = endDate.toLocaleString('en-en', { month: 'long' });
    return `${startDate.getDate()}${
        startMonth === endMonth ? '' : ' ' + startMonth
    }-${endDate.getDate()} ${endMonth}`;
};

const weekSelectors = {
    getStartWeekDate,
    getEndWeekDate,
    getRewardsGained,
    getRewardsPlanned,
    getWeekDates,
    getCurrentWeekRange,
    getIsLoading,
    getError,
};

export default weekSelectors;
