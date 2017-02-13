export const CAMPAIGNS = {
    CREATE: "CAMPAIGN_CREATE",
    DELETE: "CAMPAIGN_DELETE",
    EDIT: "CAMPAIGN_EDIT"
};

export const createCampaign = (campaign) => ({
    type: CAMPAIGNS.CREATE,
    campaign
});

export const editCampaign = (campaign) => ({
    type: CAMPAIGNS.EDIT,
    campaign
});

export const deleteCampaign  = (id) => ({
    type: CAMPAIGNS.DELETE,
    id
});