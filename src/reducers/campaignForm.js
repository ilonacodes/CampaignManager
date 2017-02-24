import {CAMPAIGN_FORM} from "../actions/CampaignForm";
import {ROUTER} from "../actions/Router";

export const campaignForm = (state = {campaign: {title: null}}, action) => {
    switch (action.type) {
        case CAMPAIGN_FORM.CHANGE:
            return {
                campaign: {
                    ...state.campaign,
                    ...action.change
                }
            };

        case ROUTER.CHANGED:
            return {campaign: {title: null}};

        default:
            return state;
    }
};