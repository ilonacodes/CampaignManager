import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import "./index.css";
import "./lib/bootstrap-3.3.7-dist/css/bootstrap.min.css";
import AppReducer from "./reducers";
import {createStore} from "redux";
import {hashHistory} from "react-router";
import {routeChanged} from "./actions/Router";

let store = createStore(
    AppReducer,
    {
        campaigns: {
            list: [
                {
                    id: 1,
                    title: "30% Off Campaign",
                    startDate: "2016-02-03",
                    endDate: "2016-02-27",
                    reports: {
                        list: [
                            {
                                id: 1,
                                title: "Month of February",
                                startDate: "2016-02-03",
                                endDate: "2016-02-27",
                                reachKpi: 75000,
                                viewsKpi: 17124
                            }
                        ],
                        maxId: 1
                    }
                }
            ],
            maxId: 1
        }
    }
);

render(
    <App store={store}/>,
    document.getElementById('root')
);

hashHistory.listen(change => store.dispatch(routeChanged(change)));
