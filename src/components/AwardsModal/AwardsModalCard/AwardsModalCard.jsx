import React from 'react';
import PropTypes from 'prop-types';

import s from './awardsModalCard.module.scss';
import { useTranslation } from 'react-i18next';

const AwardsModalCard = ({ imageUrl, title = 'prize' }) => {
    const { t } = useTranslation();
    return (
        <div className={s.card}>
            <div className={s.imageWrap}>
                <img className={s.img} src={imageUrl} alt={title} />
            </div>
            <span className={s.title}>{t(title)}</span>
        </div>
    );
};

export default AwardsModalCard;

AwardsModalCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
