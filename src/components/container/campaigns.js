import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { createCampaign, editCampaign, deleteCampaign } from '../actions/CampaignCRUD';


class Campaigns extends Component {
    constructor(props) {
        super(props);

        this.campaign = null;
        this.state = {
        };

    }
}

Campaigns.propTypes = {
    createCampaign: PropTypes.func.isRequired,
    editCampaign: PropTypes.func.isRequired,
    deleteCampaign: PropTypes.func.isRequired,
    campaigns: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    campaigns: state.campaigns
});

const mapDispatchToProps = (dispatch) => ({
    createCampaign: (campaign) => {
        dispatch(createCampaign(campaign));
    },
    editCampaign: (campaign) => {
        dispatch(editCampaign(campaign));
    },
    deleteCampaign: (id) => {
        dispatch(deleteCampaign(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);



