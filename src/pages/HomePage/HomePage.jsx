import Container from 'components/Container';
import WeekTabContent from 'components/WeekTabContent';
import WeekTabs from 'components/WeekTabs';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/operations.user';
// import PropTypes from 'prop-types';

import s from './homePage.module.scss';

const HomePage = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userOperations.getUserInfo());
    }, [dispatch]);
    return (
        <Container>
            <div className={s.wrapper}>
                <WeekTabs />
                <WeekTabContent />
            </div>
        </Container>
    );
};

// HomePage.propTypes = {};

export default HomePage;
