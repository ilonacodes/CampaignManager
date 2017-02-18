import React from "react";
import "../../App.css";
import {Link} from "react-router"

const CampaignListItem = ({id, title, deleteCampaign}) => {

    const onClick = (e) =>
        deleteCampaign(id);

    return <tr>
        <td><Link to={"/campaigns/" + id}>{title}</Link></td>
        <td><Link to={"/campaigns/" + id + "/edit"}>Edit</Link></td>
        <td><a href="#" onClick={onClick}>Delete</a></td>
    </tr>;
};


const CampaignList = ({campaignList, deleteCampaign}) => {

    return <div className="CampaignList">
        <span>
            <h1>Campaign Manager</h1>
            <Link to="/campaigns/create">Create</Link>
        </span>
        <table>
            <tbody>
            {campaignList.map(campaign =>
                <CampaignListItem {...campaign}
                    key={campaign.id}
                    deleteCampaign={deleteCampaign}/>
            )}
            </tbody>
        </table>
    </div>;
};

export default CampaignList;
