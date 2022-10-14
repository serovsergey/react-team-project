import WeekTabContent from 'components/WeekTabContent';
import WeekTabs from 'components/WeekTabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import weekSelectors from 'redux/week/selector.week';

// import PropTypes from 'prop-types';

import s from './homePage.module.scss';

const HomePage = () => {
    const { i18n } = useTranslation();
    const currentWeekRange = useSelector(
        weekSelectors.getCurrentWeekRange(i18n.language)
    );

    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767.98 });

    const weekDays = useSelector(state =>
        weekSelectors.selectWeekDays(state, {
            locale: i18n.language,
            short: !isDesktop,
        })
    );

    return (
        <div className={s.wrapper}>
            {true && (
                <WeekTabs
                    weekDays={weekDays}
                    currentWeekRangeStr={
                        !isMobile && !isDesktop ? currentWeekRange : null
                    }
                />
            )}
            <WeekTabContent
                currentWeekRangeStr={
                    isMobile || isDesktop ? currentWeekRange : null
                }
            />
        </div>
    );
};

// HomePage.propTypes = {};

export default HomePage;
