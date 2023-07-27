//index file
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { Provider } from 'react-redux';


import App from './App';
import LoginDialog from './Home/LoginDialog';
import { store } from './Redux/reducers/Store';


createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>

);



