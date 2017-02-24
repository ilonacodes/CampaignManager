import React from "react";
import {Link} from "react-router";
import {FilterContainer} from "../container/FilterContainer";

const ReportListItem = ({campaignId, id, title, startDate, endDate, deleteReport}) => {

    const onClick = (e) => {
        e.preventDefault();
        deleteReport(campaignId, id);
    };

    return <div className="row">
        <div className="col-xs-4 ReportList"><Link to={`/campaigns/${campaignId}/reports/${id}`}>{title}</Link></div>
        <div className="col-xs-4">
            <div>{startDate} - {endDate}</div>
        </div>
        <div className="col-xs-4 Buttons">
            <div className="btn-group">
                <Link className="btn btn-primary" to={`/campaigns/${campaignId}/reports/${id}/edit`}>Edit</Link>
                <a className="btn btn-danger" href="#" onClick={onClick}>Delete</a>
            </div>
        </div>
    </div>;
};

const CampaignDetail = ({id, title, reports, deleteReport}) =>
    <div className="CampaignDetail container-fluid">
        <div className="row">
            <div className="col-xs-2">
                <Link className="glyphicon glyphicon-chevron-left Back" to="/"/>
            </div>
            <div className="col-xs-8 text-center"><h1>{title}</h1></div>
            <div className="col-xs-2"></div>
        </div>

        <div className="row">
            <div className="col-xs-4"></div>
            <div className="col-xs-4 Filter">
                <FilterContainer />
            </div>
            <div className="col-xs-4"></div>
        </div>

        <div className="container-fluid List">
            <div className="row">
                {reports.map(report =>
                    <ReportListItem {...report}
                        campaignId={id}
                        key={report.id}
                        deleteReport={deleteReport}/>
                )}
            </div>
        </div>

        <div className="row">
            <div className="col-xs-5"></div>
            <div className="col-xs-2 ReportCreate">
                <Link className="btn btn-success" to={`/campaigns/${id}/reports/create`}>New Report</Link>
            </div>
        </div>
    </div>;

export default CampaignDetail;