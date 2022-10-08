import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authOperations from 'redux/auth/operations.auth';
// import PropTypes from 'prop-types';
import menuItems from './menuItems';
import s from './userInfo.module.scss';

const UserInfo = props => {
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {menuItems.map(({ name, to }) => (
          <NavLink key={name} to={to}>
            {name}
          </NavLink>
        ))}
      </ul>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </button>
    </>
  );
};

// UserInfo.propTypes = {};

export default UserInfo;
