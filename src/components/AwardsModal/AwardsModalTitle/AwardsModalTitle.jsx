import React from 'react';
import PropTypes from 'prop-types';

import s from './awardsModalTitle.module.scss';

const AwardsModalTitle = ({ children }) => {
    return <p className={s.title}>{children}</p>;
};

export default AwardsModalTitle;

AwardsModalTitle.propTypes = {
    children: PropTypes.string.isRequired,
};
