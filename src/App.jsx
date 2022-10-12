import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import SharedLayoutPage from 'pages/SharedLayoutPage';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import giftsOperations from 'redux/gifts/operations.gifts';
import userOperations from 'redux/user/operations.user';
// import { useGoogleAuth } from 'hooks/useGoogleAuth';

const HomePage = lazy(() => import('./pages/HomePage'));
const PlanningPage = lazy(() => import('./pages/PlanningPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const AwardsPage = lazy(() => import('./pages/AwardsPage'));

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userOperations.getUserInfo());
        // dispatch(giftsOperations.getGifts());
    }, [dispatch]);

    // const isLoading = useGoogleAuth();

    return (
        <Routes>
            <Route path="/" element={<SharedLayoutPage />}>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="" element={<HomePage />} />
                    <Route path="planning" element={<PlanningPage />} />
                    <Route path="awards" element={<AwardsPage />} />
                </Route>
                <Route path="/" element={<PublicRoute restricted />}>
                    <Route path="auth" element={<AuthPage />} />
                </Route>
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
};
