import {changeCampaignForm} from "../../actions/CampaignForm";
import {editCampaign} from "../../actions/CampaignCRUD";
import {hashHistory} from "react-router";
import CampaignEdit from "../presentation/CampaignEdit";
import {connect} from "react-redux/dist/react-redux";

const mapStateToProp = (state, ownProps) => {
    return {
        title: state.campaignForm.campaign.title,
        id: parseInt(ownProps.params.id, 10)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTitleChange: (e) => 
            dispatch(changeCampaignForm({title: e.target.value})),
                
        onConfirm: (campaign) => {
            hashHistory.push("/");
            dispatch(editCampaign(campaign))
        }
    }
};

export const CampaignEditContainer = connect(
    mapStateToProp,
    mapDispatchToProps
)(CampaignEdit);


