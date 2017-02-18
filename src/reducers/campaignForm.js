import {CAMPAIGN_FORM} from "../actions/CampaignForm";

export const campaignForm = (state = {campaign: {title: ""}}, action) => {
    switch (action.type) {
        case CAMPAIGN_FORM.CHANGE:
            return {
                campaign: {
                    ...state.campaign,
                    ...action.change
                }
            };

        default:
            return state;
    }

};