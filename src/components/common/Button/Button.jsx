import React from 'react';
// import PropTypes from 'prop-types';

import s from './button.module.scss';

const Button = ({ children, ...rest }) => {
    return (
        <button className={s.button} {...rest}>
            {children}
        </button>
    );
};

export default Button;

// Button.propTypes = {
//     children: PropTypes.string.isRequired,
// };
