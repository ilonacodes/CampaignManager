import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import "./index.css";
import AppReducer from "./reducers";
import {createStore} from "redux";

let store = createStore(AppReducer);

render(
    <App store={store}/>,
    document.getElementById('root')
);
