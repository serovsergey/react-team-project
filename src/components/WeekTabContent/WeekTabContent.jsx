import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import CardList from 'components/CardList';
import CurrentDay from 'components/CurrentDay';
import CurrentWeekRange from 'components/CurrentWeekRange';
import Footer from 'components/Footer';
import NoTasks from 'components/NoTasks';
import ProgressBar from 'components/ProgressBar';
import ProgressBarMobile from 'components/ProgressBarMobile';
import commonSelectors from 'redux/common/selector.common';
import tasksSelectors from 'redux/tasks/selector.tasks';

import s from './weekTabContent.module.scss';
import CustomTaskBox from 'components/CustomTaskBox';

const WeekTabContent = ({ currentWeekRangeStr }) => {
    const currentDate = useSelector(commonSelectors.getCurrentDate);
    const isMobile = useMediaQuery({ maxWidth: 767.97 });
    const dayTasks = useSelector(state =>
        tasksSelectors.selectDayTasks(state, currentDate)
    );
    const today = new Date().setHours(0, 0, 0, 0);
    const readOnly = currentDate.getTime() > today;
    // console.log(currentDate.setHours(0, 0, 0, 0), today);
    const notAvailable = new Date(currentDate).setHours(0, 0, 0, 0) > today;
    const noTasks = !dayTasks || !dayTasks.length;
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.main} style={{ flexGrow: noTasks ? 0 : 1 }}>
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
                            {isMobile ? <><ProgressBarMobile /><CustomTaskBox atMain={true}/></> : <ProgressBar />}
                        </div>
                    </div>
                    {!noTasks && (
                        <CardList
                            tasks={dayTasks}
                            readOnly={readOnly}
                            notAvailable={notAvailable}
                            currentDate={currentDate}
                        />
                    )}
                </div>
                {noTasks && <NoTasks />}
                {!isMobile && <Footer />}
            </div>
        </>
    );
};

WeekTabContent.propTypes = {
    currentWeekRangeStr: PropTypes.string,
};

export default WeekTabContent;
