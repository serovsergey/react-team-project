import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import s from './currentWeekRange.module.scss';

const CurrentWeekRange = ({ currentWeekRangeStr }) => {
    const { t } = useTranslation();
    return (
        <div className={s.wrapper}>
            {t(`A week:`)}&nbsp;{currentWeekRangeStr}
        </div>
    );
};

CurrentWeekRange.propTypes = {
    currentWeekRangeStr: PropTypes.string.isRequired,
};

export default CurrentWeekRange;
