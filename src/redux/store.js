import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { configureStore } from '@reduxjs/toolkit';
// import { contactsSlice } from './contactsSlice/slice.contacts';
// import { filterReducer } from './filterReducer/reducer.filter';
import authReducer from './auth';
import userReducer from './user';
import tasksReducer from './tasks';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        user: userReducer,
        tasks: tasksReducer,
        week: null,
        gifts: null,
        // contacts: contactsSlice.reducer,
        // filter: filterReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        });
    },
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
