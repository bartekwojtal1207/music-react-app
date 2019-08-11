import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux
import {createStore, combineReducers, applyMiddleware} from "redux";
import authReducer from './store/reducers/auth/auth';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import songsReducer from './store/reducers/songs/songs';

const rootReducer = combineReducers({
    songs: songsReducer,
    auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

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
