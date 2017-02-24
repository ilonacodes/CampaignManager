import React from "react";
import "../App.css";
import {Router, Route, hashHistory} from "react-router";
import {CampaignEditContainer} from "./container/CampaignEditContainer";
import CampaignListContainer from "./container/CampaignListContainer";
import {Provider} from "react-redux";
import {CampaignCreateContainer} from "./container/CampaignCreateContainer";
import {CampaignDetailContainer} from "./container/CampaignDetailContainer";
import {ReportCreateContainer} from "./container/ReportCreateContainer";
import {ReportEditContainer} from "./container/ReportEditContainer";
import {ReportDetailContainer} from "./container/ReportDetailContainer";

export const routes = [
    <Route path="/" component={CampaignListContainer}/>,
    <Route path="/campaigns/create" component={CampaignCreateContainer}/>,
    <Route path="/campaigns/:id" component={CampaignDetailContainer}/>,
    <Route path="/campaigns/:id/edit" component={CampaignEditContainer}/>,
    <Route path="/campaigns/:id/reports/create" component={ReportCreateContainer}/>,
    <Route path="/campaigns/:id/reports/:reportId/edit" component={ReportEditContainer}/>,
    <Route path="/campaigns/:id/reports/:reportId" component={ReportDetailContainer}/>
];

const App = ({store}) =>
    <Provider store={store}>
        <div className="container">
            <div className="row">
                <div className="col-xs-2"></div>
                <div className="col-xs-8 main-container">
                    <Router history={hashHistory} routes={routes}/>
                </div>
            </div>
        </div>
    </Provider>;

export default App;
