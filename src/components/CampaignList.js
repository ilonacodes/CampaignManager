import React from "react";
import "../App.css";
import { Link } from "react-router"

const campaignList = [
    {
        title: "50% discount of Apple product",
        id: 56
    },

    {
        title: "70% discount of Apple product",
        id: 45
    }
];

const CampaignListItem = (props) =>
    <tr>
        <td><Link to={"/campaigns/" + props.id}>{props.title}</Link></td>
        <td><Link to={"/campaigns/" + props.id + "/edit"}>Edit</Link></td>
        <td><a href="#">Delete</a></td>
    </tr>;


const CampaignList = (props) =>
    <div className="CampaignList">
        <span>
            <h1>Campaign Manager</h1>
            <Link to="/campaigns/create">Create</Link></span>
        <table>
            <tbody>
            {campaignList.map(campaign =>
                <CampaignListItem {...campaign} key={campaign.id}/>
            )}
            </tbody>
        </table>
    </div>;

export default CampaignList;
