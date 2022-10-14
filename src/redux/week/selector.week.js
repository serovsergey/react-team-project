import { createSelector } from '@reduxjs/toolkit';

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

const selectWeekDays = createSelector(
    [getWeekDates, (_, options) => options],
    (weekDates, { locale, short }) =>
        weekDates.map(dt => {
            const dayEng = dt.toLocaleDateString('en', {
                weekday: 'long',
            });
            let dayStr = dt.toLocaleDateString(locale, {
                weekday: short ? 'short' : 'long',
            });
            dayStr = dayStr.charAt(0).toUpperCase() + dayStr.slice(1);
            return {
                date: dt,
                name: dayEng.toLowerCase(),
                title: short ? dayStr.slice(0, 2) : dayStr,
            };
        })
);

const getCurrentWeekRange = locale => state => {
    const startDate = new Date(state.week.startWeekDate);
    let startMonth = startDate.toLocaleDateString(locale, { month: 'long' });
    startMonth = startMonth.charAt(0).toUpperCase() + startMonth.slice(1);
    const endDate = new Date(state.week.endWeekDate);
    let endMonth = endDate.toLocaleDateString(locale, { month: 'long' });
    endMonth = endMonth.charAt(0).toUpperCase() + endMonth.slice(1);
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
    selectWeekDays,
    getCurrentWeekRange,
    getIsLoading,
    getError,
};

export default weekSelectors;
