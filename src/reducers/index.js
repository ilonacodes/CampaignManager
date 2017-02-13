import { CAMPAIGNS } from '../actions/CampaignCRUD'

const AppReducer = (state = {}, action) => {
    switch (action.type) {
        case CAMPAIGNS.CREATE:
            return [
                ...state,
                action.campaign
            ];

        case CAMPAIGNS.EDIT:
            return state.map((s) => {
                if (s.id !== action.campaign.id) {
                    return s;
                }
                return action.campaign;
            });

        case CAMPAIGNS.DELETE:
            return state.filter((s) => s.id !== action.id);

        default:
            return state;
    }
};



export default AppReducer;