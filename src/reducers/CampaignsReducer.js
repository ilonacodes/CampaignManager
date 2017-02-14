import {CAMPAIGNS} from '../actions/CampaignCRUD'

const CampaignsReducer = (state = {campaigns: [], maxId: 0}, action) => {
    switch (action.type) {
        case CAMPAIGNS.CREATE:
            let id = state.maxId + 1;
            let campaign = {
                ...action.campaign,
                id: id
            };
            return {
                maxId: id,
                campaigns: [
                    ...state.campaigns,
                    campaign
                ]
            };

        case CAMPAIGNS.EDIT:
            return state.map((currentCampaign) => {
                if (currentCampaign.id !== action.campaign.id) {
                    return currentCampaign;
                }
                return action.campaign;
            });

        case CAMPAIGNS.DELETE:
            return state.filter((campaign) => campaign.id !== action.id);

        default:
            return state;
    }
};

export default CampaignsReducer;