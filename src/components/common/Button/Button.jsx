import React from 'react';
// import PropTypes from 'prop-types';

import s from './button.module.scss';
import LoaderSmall from '../../LoaderSmall/LoaderSmall';

const Button = ({ children, isLoading = false, ...rest }) => {
    return (
        <button className={s.button} {...rest}>
            {children}
            &nbsp;
            {isLoading && <LoaderSmall />}
        </button>
    );
};

export default Button;

// Button.propTypes = {
//     children: PropTypes.string.isRequired,
// };
