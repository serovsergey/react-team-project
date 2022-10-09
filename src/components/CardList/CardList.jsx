import React from 'react';
// import PropTypes from 'prop-types';

import s from './cardList.module.scss';

const CardList = ({ tasks }) => {
    return (
        <div>
            {tasks?.map(({ _id, title }) => (
                <div key={_id}>{title}</div>
            ))}
        </div>
    );
};

// CardList.propTypes = {};

export default CardList;
