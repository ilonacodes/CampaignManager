export const CAMPAIGN_FORM = {
    CHANGE: "CAMPAIGN_FORM_CHANGE"
};

export const changeCampaignForm = (change) => ({
    type: CAMPAIGN_FORM.CHANGE,
    change
});