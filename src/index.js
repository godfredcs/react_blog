import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import Promise from 'redux-promise';

import './index.css';
import './assets/css/bootstrap.min.css';

import reducers from './reducers';

import Nav from './nav';
import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
        <BrowserRouter>
            <div className="container">
                <Nav />
                <Routes />
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
