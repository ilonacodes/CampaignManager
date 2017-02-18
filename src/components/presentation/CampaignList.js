import React from "react";
import "../../App.css";
import { Link } from "react-router"

const CampaignListItem = (props) =>
    <tr>
        <td><Link to={"/campaigns/" + props.id}>{props.title}</Link></td>
        <td><Link to={"/campaigns/" + props.id + "/edit"}>Edit</Link></td>
        <td><a href="#">Delete</a></td>
    </tr>;


const CampaignList = (props) => {

    return <div className="CampaignList">
        <span>
            <h1>Campaign Manager</h1>
            <Link to="/campaigns/create">Create</Link></span>
        <table>
            <tbody>
            {props.campaignList.map(campaign =>
                <CampaignListItem {...campaign} key={campaign.id}/>
            )}
            </tbody>
        </table>
    </div>;
}

export default CampaignList;
