import React from 'react';
// import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/selector.auth';

const PrivateRoute = () => {
  const token = useSelector(authSelectors.getToken);
  return token ? <Outlet /> : <Navigate to="/auth" />;
};

// PrivateRoute.propTypes = {};

export default PrivateRoute;
