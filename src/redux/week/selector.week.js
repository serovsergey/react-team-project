const getStartWeekDate = state => state.week.startWeekDate;
const getEndWeekDate = state => state.week.startWeekDate;
const getRewardsGained = state => state.week.rewardsGained;
const getRewardsPlanned = state => state.week.rewardsPlanned;

const weekSelectors = {
    getStartWeekDate,
    getEndWeekDate,
    getRewardsGained,
    getRewardsPlanned,
};

export default weekSelectors;
