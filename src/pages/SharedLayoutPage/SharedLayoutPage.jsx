import UserInfo from 'components/UserInfo/UserInfo';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/selector.auth';
// import PropTypes from 'prop-types';

// import s from './sharedLayoutPage.module.scss';

const SharedLayoutPage = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const token = useSelector(authSelectors.getToken);
  return (
    <div>
      {/* <div className={s.container}> */}
      <header className={null}>
        <div className={null}>
          <Link to="/">Home</Link>
          <span variant="h4">kidslike</span>
        </div>
        {token ? <UserInfo /> : null}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      Footer
      {/* </div> */}
    </div>
  );
};

// SharedLayoutPage.propTypes = {};

export default SharedLayoutPage;
