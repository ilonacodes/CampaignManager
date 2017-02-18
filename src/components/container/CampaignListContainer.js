import { connect } from "react-redux";
import CampaignList from "../presentation/CampaignList";
import {deleteCampaign} from "../../actions/CampaignCRUD";


const mapStateToProps = (state) => {
    return {
        campaignList: state.campaigns.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCampaign: (id) => {
            dispatch(deleteCampaign(id))
        }
    }
};

const CampaignListContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(CampaignList);

export default CampaignListContainer;