import CampaignDetail from "../presentation/CampaignDetail";
import {connect} from "react-redux";

const findCampaignById = (campaigns, id) => {
    return campaigns.find(campaign => campaign.id === id);
};

const mapStateToProps = (state, ownProps) => {

    let id = parseInt(ownProps.params.id, 10);
    let campaign = findCampaignById(state.campaigns.list, id);

    return {
        id: id,
        title: campaign.title,
        reports: campaign.reports.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const CampaignDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignDetail);