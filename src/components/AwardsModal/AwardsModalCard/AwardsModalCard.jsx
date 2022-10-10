import React from 'react';
import PropTypes from 'prop-types';

import s from './awardsModalCard.module.scss';

const AwardsModalCard = ({ imageUrl, title = 'prize' }) => {
    return (
        <div className={s.card}>
            <div className={s.imageWrap}>
                <img className={s.img} src={imageUrl} alt={title} />
            </div>
            <span className={s.title}>{title}</span>
        </div>
    );
};

export default AwardsModalCard;
AwardsModalCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
