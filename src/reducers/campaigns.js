import {CAMPAIGNS} from '../actions/CampaignCRUD'
import {REPORTS} from "../actions/ReportCRUD";
import reports from "./reports";

const handleReportsAction = (state, action) => {
    return {
        ...state,
        list: state.list.map(campaign => {
            if (campaign.id === action.campaignId) {
                return {
                    ...campaign,
                    reports: reports(campaign.reports, action)
                };
            }

            return campaign;
        })
    };
};

const campaigns = (state = {list: [], maxId: 0}, action) => {
    switch (action.type) {
        case CAMPAIGNS.CREATE:
            let id = state.maxId + 1;
            let campaign = {
                ...action.campaign,
                id: id,
                reports: {
                    list: [],
                    maxId: 0
                }
            };
            return {
                maxId: id,
                list: [
                    ...state.list,
                    campaign
                ]
            };

        case CAMPAIGNS.EDIT:
            return {
                ...state,
                list: state.list.map((campaign) => {
                    if (campaign.id !== action.campaign.id) {
                        return campaign;
                    }
                    return action.campaign;
                })
            };


        case CAMPAIGNS.DELETE:
            return {
                ...state,
                list: state.list
                    .filter((campaign) => campaign.id !== action.id)
            };

        case REPORTS.CREATE:
            return handleReportsAction(state, action);

        case REPORTS.EDIT:
            return handleReportsAction(state, action);

        case REPORTS.DELETE:
            return handleReportsAction(state, action);

        default:
            return state;
    }
};

export default campaigns;