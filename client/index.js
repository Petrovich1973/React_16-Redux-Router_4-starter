import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route } from 'react-router-dom';

import store from './store';

import App from './components/App';

import './style.less';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(

    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>             
        </Router> 
    </Provider>,

    document.getElementById('root')
    
);