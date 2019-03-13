import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
// redux
import {createStore, combineReducers} from "redux";
import authReducer from './store/reducer/auth';
import reducer from './store/reducer/reducer';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'

const rootReducer = combineReducers({
    order: reducer,
    auth: authReducer
});


const store = createStore(authReducer)

const Root = () => (
    <Router>
        <Provider store={store}>
            <Route path="/" component={App}/>
        </Provider>
    </Router>
);

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
