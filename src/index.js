import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './App';
import { store, persistor } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter basename="/react-team-project">
                <App />
                <ToastContainer />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
