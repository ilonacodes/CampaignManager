import React from 'react';
import {Link} from 'react-router';

const ReportListItem = ({campaignId, id, title, startDate, endDate, deleteReport}) => {

    const onClick = (e) => {
        e.preventDefault();
        deleteReport(campaignId, id);
    };

    return <tr>
        <td><Link to={`/campaigns/${campaignId}/reports/${id}`}>{title}</Link></td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td><Link to={`/campaigns/${campaignId}/reports/${id}/edit`}>Edit</Link></td>
        <td><a href="#" onClick={onClick}>Delete</a></td>
    </tr>;
};


const CampaignDetail = ({id, title, reports, deleteReport}) =>
    <div className="CampaignDetail">
        <span>
            <h1>{title}</h1>
            <Link to={`/campaigns/${id}/reports/create`}>Create report</Link>
        </span>

        <table>
            <tbody>
            {reports.map(report =>
                <ReportListItem {...report}
                    campaignId={id}
                    key={report.id}
                    deleteReport={deleteReport}/>
            )}
            </tbody>
        </table>
    </div>;

export default CampaignDetail;