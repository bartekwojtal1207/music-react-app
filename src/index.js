import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux
import {createStore, combineReducers} from "redux";
import authReducer from './store/auth/auth';
import reducer from './store/reducer/reducer';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'

const rootReducer = combineReducers({
    songs: reducer,
    auth: authReducer
});

const store = createStore(rootReducer);

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
