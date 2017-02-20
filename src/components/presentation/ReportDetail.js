import React from "react";

const ReportDetail = ({title, startDate, endDate, reachKpi, viewsKpi}) =>
    <div className="ReportDetail">
        <span>
            <h1>{title}</h1>
        </span>

        <span>
            {startDate}
            -
            {endDate}
        </span>

        <div>
            <h3>KPIs: </h3>
            <dl>
                <dt>Reach: </dt>
                <dd>{reachKpi}</dd>

                <dt>Views: </dt>
                <dd>{viewsKpi}</dd>
            </dl>
        </div>
    </div>;

export default ReportDetail;