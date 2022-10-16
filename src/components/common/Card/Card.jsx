import s from './card.module.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
// import i18n from 'i18n';

const Card = ({ children, title = 'test', reward = 0, imageUrl, id }) => {
    const { t } = useTranslation();
    return (
        <div id={id} className={s.card}>
            <div className={s.imgWrapper}>
                <img className={s.img} src={imageUrl} alt="#" />
            </div>
            <div className={s.footer}>
                <div>
                    <p className={s.title}>{t(title)}</p>
                    <span className={s.reward}>
                        {`${reward} ${t('points', { count: reward })}`}
                    </span>
                </div>
                <div className={s.btn}>{children}</div>
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    title: PropTypes.string.isRequired,
    reward: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    // id: PropTypes.string.isRequired,
    children: PropTypes.node,
};
