import React from 'react';
// import PropTypes from 'prop-types';

import s from './currentWeekRange.module.scss';

const CurrentWeekRange = ({ currentWeekRangeStr }) => {
    return <div className={s.wrapper}>A week: {currentWeekRangeStr}</div>;
};

// CurrentWeekRange.propTypes = {};

export default CurrentWeekRange;
