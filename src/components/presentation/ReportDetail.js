import React from "react";
import {Link} from "react-router";

const ReportDetail = ({campaignId, id, title, startDate, endDate, reachKpi, viewsKpi}) =>

    <div className="ReportDetail container-fluid">
        <div className="row">
            <div className="col-xs-2">
                <Link className="glyphicon glyphicon-chevron-left Back" to={`/campaigns/${campaignId}`} />
            </div>
            <div className="col-xs-8 text-center Campaign"><h1>{title}</h1></div>
            <div className="col-xs-2"></div>

            <div className="container-fluid Detail">
                <div className="row">
                    <div className="col-xs-4"></div>
                    <div className="col-xs-4"><h4>{startDate} - {endDate}</h4></div>
                </div>
                <div className="row">
                    <div className="col-xs-4"></div>
                    <div className="col-xs-4 text-center"><h3><strong>KPIs</strong></h3></div>
                    <div className="col-xs-4"></div>
                </div>

                <div className="row">
                    <div className="col-xs-4"></div>
                    <div className="col-xs-4 text-center">Reach: {reachKpi}</div>
                </div>

                <div className="row">
                    <div className="col-xs-4"></div>
                    <div className="col-xs-4 text-center">Views: {viewsKpi}</div>
                </div>
            </div>
        </div>
    </div>;

export default ReportDetail;