import {changeCampaignForm} from "../../actions/CampaignForm";
import {editCampaign} from "../../actions/CampaignCRUD";
import {hashHistory} from "react-router";
import CampaignEdit from "../presentation/CampaignEdit";
import {connect} from "react-redux/dist/react-redux";

const findCampaignById = (campaigns, id) => {
    return campaigns.find(campaign => campaign.id === id);
};

const mapStateToProp = (state, ownProps) => {
    let id = parseInt(ownProps.params.id, 10);
    let campaign = findCampaignById(state.campaigns.list, id);

    return {
        id: id,
        title: state.campaignForm.campaign.title || campaign.title
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTitleChange: (e) => 
            dispatch(changeCampaignForm({title: e.target.value})),
                
        onConfirm: (campaign) => {
            dispatch(editCampaign(campaign))
            hashHistory.push("/");
        }
    }
};

export const CampaignEditContainer = connect(
    mapStateToProp,
    mapDispatchToProps
)(CampaignEdit);


