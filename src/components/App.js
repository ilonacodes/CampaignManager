import React from "react";
import "../App.css";
import {Router, Route, hashHistory} from "react-router";
import CampaignDetail from "./presentation/CampaignDetail";
import ReportCreate from "./presentation/ReportCreate";
import ReportDetail from "./presentation/ReportDetail";
import ReportEdit from "./presentation/ReportEdit";
import {CampaignEditContainer} from "./container/CampaignEditContainer"
import CampaignListContainer from "./container/CampaignListContainer";
import {Provider} from "react-redux";
import {CampaignCreateContainer} from "./container/CampaignCreateContainer";

export const routes = [
    <Route path="/" component={CampaignListContainer}/>,
    <Route path="/campaigns/create" component={CampaignCreateContainer}/>,
    <Route path="/campaigns/:id" component={CampaignDetail}/>,
    <Route path="/campaigns/:id/edit" component={CampaignEditContainer}/>,
    <Route path="/campaigns/:id/reports/create" component={ReportCreate}/>,
    <Route path="/campaigns/:id/reports/:reportId/edit" component={ReportEdit}/>,
    <Route path="/campaigns/:id/reports/:reportId" component={ReportDetail}/>
];

const App = ({store}) =>
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>;

export default App;
