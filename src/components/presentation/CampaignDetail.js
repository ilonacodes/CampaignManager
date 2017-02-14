import React from 'react';
import { Link } from 'react-router';

const campaign =
{
    title: "Apple",
    id: 17,
    reports: [
        {
            title: "first report",
            id: 34
        },
        {
            title: "second report",
            id: 55
        }
    ]
};

const ReportListItem = (props) =>
    <tr>
        <td><Link to={"/campaigns/" + props.campaignId + "/reports/create"} /></td>
        <td><Link to={"/campaigns/" + props.campaignId + "/reports/" + props.id}>{props.title}</Link></td>
        <td><Link to={"/campaigns/" + props.campaignId + "/reports/" + props.id + "/edit"}>Edit</Link></td>
        <td><a href="#">Delete</a></td>
    </tr>;


const CampaignDetail = (props) =>
    <div className="CampaignDetail">
        <span>
            <h1>{campaign.title}</h1>
            <Link to="/campaigns/:id/reports/create">Create</Link>
        </span>

        <table>
            <tbody>
            {campaign.reports.map(report =>
                <ReportListItem {...report} campaignId={campaign.id} key={report.id}/>
            )}
            </tbody>
        </table>
    </div>;

export default CampaignDetail;