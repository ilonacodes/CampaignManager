import React from "react";
import "../../App.css";
import {Link} from "react-router"

const CampaignListItem = ({id, title, deleteCampaign}) => {

    const onClick = (e) =>
        deleteCampaign(id);

    return <div className="row">
        <div className="col-xs-8 List"><Link to={"/campaigns/" + id}>{title}</Link></div>
        <div className="col-xs-4 Buttons">
            <div className="btn-group">
                <Link className="btn btn-primary" to={"/campaigns/" + id + "/edit"}>Edit</Link>
                <a className="btn btn-danger" href="#" onClick={onClick}>Delete</a>
            </div>
        </div>
    </div>;
};


const CampaignList = ({campaignList, deleteCampaign}) => {

    return <div className="CampaignList">
        <div className="container-fluid">
            <div className="row CampaignListTitle">
                <div className="col-xs-2"></div>
                <div className="col-xs-8"><h1>Campaign Manager</h1></div>
                <div className="col-xs-2"></div>
            </div>
        </div>


        <div className="container-fluid">
            {campaignList.map(campaign =>
                <CampaignListItem {...campaign}
                    key={campaign.id}
                    deleteCampaign={deleteCampaign}/>
            )}
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-5"></div>
                <div className="col-xs-2">
                    <div className="Create">
                        <Link to="/campaigns/create" className="btn btn-success">New Campaign</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default CampaignList;
