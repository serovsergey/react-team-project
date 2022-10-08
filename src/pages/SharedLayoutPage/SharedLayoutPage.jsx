import Header from 'components/Header';
// import UserInfo from 'components/UserInfo/UserInfo';
import React, { Suspense } from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import authSelectors from 'redux/auth/selector.auth';
// import PropTypes from 'prop-types';

// import s from './sharedLayoutPage.module.scss';

const SharedLayoutPage = () => {
 

  return (
    <div>
     
      <Header/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      Footer
      
    </div>
  );
};

// SharedLayoutPage.propTypes = {};

export default SharedLayoutPage;
