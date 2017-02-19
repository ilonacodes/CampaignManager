import React from 'react';
import { Link } from 'react-router';

const ReportListItem = ({campaignId, id, title, startDate, endDate}) =>
    <tr>
        <td><Link to={`/campaigns/${campaignId}/reports/${id}`} >{title}</Link></td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td><Link to={`/campaigns/${campaignId}/reports/${id}/edit`} >Edit</Link></td>
        <td><a href="#">Delete</a></td>
    </tr>;


const CampaignDetail = ({id, title, reports}) =>
    <div className="CampaignDetail">
        <span>
            <h1>{title}</h1>
            <Link to={`/campaigns/${id}/reports/create`}>Create report</Link>
        </span>

        <table>
            <tbody>
            {reports.map(report =>
                <ReportListItem {...report} campaignId={id} key={report.id}/>
            )}
            </tbody>
        </table>
    </div>;

export default CampaignDetail;