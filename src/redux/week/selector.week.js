const getStartWeekDate = state => state.week.startWeekDate;
const getEndWeekDate = state => state.week.endWeekDate;
const getRewardsGained = state => state.week.rewardsGained;
const getRewardsPlanned = state => state.week.rewardsPlanned;
const getIsLoading = state => state.week.isLoading;
const getError = state => state.week.error;

function getDates(startDate, stopDate) {
    const dateArray = [];
    let currentDate = startDate;
    while (currentDate <= stopDate) {
        // console.log(currentDate);
        dateArray.push(new Date(currentDate));
        currentDate = currentDate + 1000 * 60 * 60 * 24;
    }
    return dateArray;
}
const getWeekDates = state =>
    getDates(
        new Date(state.week.startWeekDate),
        new Date(state.week.endWeekDate)
    );

const weekSelectors = {
    getStartWeekDate,
    getEndWeekDate,
    getRewardsGained,
    getRewardsPlanned,
    getWeekDates,
    getIsLoading,
    getError,
};

export default weekSelectors;
