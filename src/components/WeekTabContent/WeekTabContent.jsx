import CardList from 'components/CardList';
import CurrentDay from 'components/CurrentDay';
import CurrentWeekRange from 'components/CurrentWeekRange';
import Footer from 'components/Footer';
import NoTasks from 'components/NoTasks';
import ProgressBar from 'components/ProgressBar';
import ProgressBarMobile from 'components/ProgressBarMobile';
import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import commonSelectors from 'redux/common/selector.common';
// import { useSearchParams } from 'react-router-dom';
import tasksSelectors from 'redux/tasks/selector.tasks';
// import PropTypes from 'prop-types';

import s from './weekTabContent.module.scss';

const WeekTabContent = ({ currentWeekRangeStr }) => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const isDesktop = useMediaQuery({ minWidth: 1280 });
    const currentDate = useSelector(commonSelectors.getCurrentDate);

    const isMobile = useMediaQuery({ maxWidth: 767.97 });
    // const tasks = useSelector(tasksSelectors.getTasks);
    const dayTasks = useSelector(state =>
        tasksSelectors.selectDayTasks(state, currentDate)
    );
    const today = new Date().setHours(0, 0, 0, 0);
    const readOnly = currentDate.getTime() > today;
    return (
        <div className={s.wrapper}>
            <div className={s.contentHeader}>
                <div className={s.info}>
                    {currentWeekRangeStr && (
                        <CurrentWeekRange
                            currentWeekRangeStr={currentWeekRangeStr}
                        />
                    )}
                    <CurrentDay currentDate={currentDate} />
                </div>
                <div className={s.progress}>
                    {isMobile ? <ProgressBarMobile /> : <ProgressBar />}
                </div>
            </div>
            {dayTasks && dayTasks.length > 0 ? (
                <CardList
                    tasks={dayTasks}
                    readOnly={readOnly}
                    currentDate={currentDate}
                />
            ) : (
                <NoTasks />
            )}
            <Footer />
        </div>
    );
};

// WeekTabContent.propTypes = {};

export default WeekTabContent;
