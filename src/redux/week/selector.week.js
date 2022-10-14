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
    (weekDates, locale) =>
        weekDates.map(dt => {
            const dayEng = dt.toLocaleDateString('en', {
                weekday: 'long',
            });
            let dayStr = dt.toLocaleDateString(locale, {
                weekday: 'long',
            });
            let dayStrShort = dt.toLocaleDateString(locale, {
                weekday: 'short',
            });
            dayStr = dayStr.charAt(0).toUpperCase() + dayStr.slice(1);
            dayStrShort =
                dayStrShort.charAt(0).toUpperCase() + dayStrShort.slice(1);
            return {
                date: dt,
                name: dayEng.toLowerCase(),
                title: dayStr,
                titleShort: dayStrShort.slice(0, 2),
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

const getCurrentWeekRangeEx = state => {
    const startDate = new Date(state.week.startWeekDate);
    let startDay = String(startDate.getDate()).padStart(2, '0');
    let startMonth = String(startDate.getMonth() + 1).padStart(2, '0');
    startMonth = startMonth.charAt(0).toUpperCase() + startMonth.slice(1);
    const startYear = startDate.getFullYear();
    const endDate = new Date(state.week.endWeekDate);
    let endDay = String(endDate.getDate()).padStart(2, '0');
    let endMonth = String(endDate.getMonth() + 1).padStart(2, '0');
    endMonth = endMonth.charAt(0).toUpperCase() + endMonth.slice(1);
    const endYear = endDate.getFullYear();
    return `${startDay}${startMonth === endMonth ? '' : '.' + startMonth}${
        startYear === endYear ? '' : '.' + startYear
    } - ${endDay}.${endMonth}.${endYear}`;
};

const weekSelectors = {
    getStartWeekDate,
    getEndWeekDate,
    getRewardsGained,
    getRewardsPlanned,
    getWeekDates,
    selectWeekDays,
    getCurrentWeekRange,
    getCurrentWeekRangeEx,
    getIsLoading,
    getError,
};

export default weekSelectors;
