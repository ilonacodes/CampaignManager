import {changeCampaignForm} from "../../actions/CampaignForm";
import CampaignCreate from "../presentation/CampaignCreate";
import {connect} from "react-redux";
import {createCampaign} from "../../actions/CampaignCRUD";
import {hashHistory} from "react-router";

const mapStateToProps = (state) => {
    return {
        title: state.campaignForm.campaign.title
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTitleChange: (e) => 
            dispatch(changeCampaignForm({title: e.target.value})),

        onConfirm: (campaign) => {
            hashHistory.push("/");
            dispatch(createCampaign(campaign));
        }
    }
};

export const CampaignCreateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignCreate);

