import React from 'react';
import {render} from 'react-dom';
import Routing from './components/Routing';
import './index.css';
import AppReducer from "./reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";

let store = createStore(AppReducer);

render(
    <Provider store={store}>
        <Routing />
    </Provider>,
    document.getElementById('root')
);
