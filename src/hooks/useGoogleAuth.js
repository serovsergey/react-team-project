import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
import authSelectors from '../redux/auth/selector.auth';
import userOperations from '../redux/user/operations.user';

export const useGoogleAuth = () => {
    const dispatch = useDispatch();
    // const [searchParams] = useSearchParams();
    // const token = searchParams.get('token');
    const token = useSelector(authSelectors.getToken);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (token) {
            setIsLoading(true);
            dispatch(userOperations.getUserInfo());

            // TODO Logic
        }
    }, [token, dispatch]);
    return isLoading;
};
