import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useGoogleAuth = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    const [isLoading, setIsLoading] = useState(false);

    //  const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (token) {
            setIsLoading(true);
            // TODO Logic
        }
    }, [token]);
    return isLoading;
};
