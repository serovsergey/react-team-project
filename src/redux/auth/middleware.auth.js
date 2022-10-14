import { isRejectedWithValue } from '@reduxjs/toolkit';
import { authActions } from './auth.slice';

const authErrorLogger =
    ({ dispatch, getState }) =>
    next =>
    action => {
        if (isRejectedWithValue(action)) {
            if (getState().auth.token && action.payload.status === 401) {
                console.warn('Wrong token! Cleared.');
                dispatch(authActions.resetToken());
            }
        }
        return next(action);
    };

export default authErrorLogger;
