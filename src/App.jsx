import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import SharedLayoutPage from 'pages/SharedLayoutPage';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import { authActions } from 'redux/auth/auth.slice';
import authSelectors from 'redux/auth/selector.auth';
// import giftsOperations from 'redux/gifts/operations.gifts';
import userOperations from 'redux/user/operations.user';

const HomePage = lazy(() => import('./pages/HomePage'));
const PlanningPage = lazy(() => import('./pages/PlanningPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const AwardsPage = lazy(() => import('./pages/AwardsPage'));

export const App = () => {
    const dispatch = useDispatch();
    const token = useSelector(authSelectors.getToken);
    const [searchParams] = useSearchParams();
    const tokenGoogle = searchParams.get('token');
    useEffect(() => {
        if (token) {
            dispatch(userOperations.getUserInfo());
        }

        // dispatch(giftsOperations.getGifts());
    }, [dispatch, token]);

    useEffect(() => {
        if (tokenGoogle) {
            dispatch(authActions.setToken(tokenGoogle));
        }
    }, [tokenGoogle, dispatch]);

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
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Route>
        </Routes>
    );
};
