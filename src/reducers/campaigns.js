import {CAMPAIGNS} from '../actions/CampaignCRUD'

const campaigns = (state = {list: [], maxId: 0}, action) => {
    switch (action.type) {
        case CAMPAIGNS.CREATE:
            let id = state.maxId + 1;
            let campaign = {
                ...action.campaign,
                id: id
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

        default:
            return state;
    }
};

export default campaigns;