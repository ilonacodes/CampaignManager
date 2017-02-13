import React, {Component} from 'react'
import '../App.css'
import {Router, Route, hashHistory} from 'react-router'
import CampaignList from './CampaignList'
import CampaignCreate from './presentation/CampaignCreate'
import CampaignDetail from './presentation/CampaignDetail'
import CampaignEdit from './presentation/CampaignEdit'
import ReportCreate from './presentation/ReportCreate'
import ReportDetail from './presentation/ReportDetail'
import ReportEdit from './presentation/ReportEdit'

class Routing extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={CampaignList} />
                <Route path="/campaigns/create" component={CampaignCreate} />
                <Route path="/campaigns/:id" component={CampaignDetail} />
                <Route path="/campaigns/:id/edit" component={CampaignEdit} />
                <Route path="/campaigns/:id/reports/create" component={ReportCreate} />
                <Route path="/campaigns/:id/reports/edit" component={ReportEdit} />
                <Route path="/campaigns/:id/reports/:reportId" component={ReportDetail} />
            </Router>
        );
    }
}

export default Routing;
