import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
//import counterReducer from './store/reducers/counter';
import axe from 'react-axe';

const rootReducer = combineReducers({
    ctr: ()=>({a:1 })
});

const store = createStore(rootReducer);

axe(React,ReactDOM,1000);
ReactDOM.hydrate(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter></Provider>,
    document.querySelector('#root')
);