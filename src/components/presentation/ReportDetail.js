import React from "react";

const reportDetail = {
    title: "Month of February",
    id: 40,
    startDate: "2016/02/03",
    endDate: "2016/02/27",
    kpis: [
        {
            name: "Reach",
            value: 1500
        },

        {
            name: "Views",
            value: 234
        }
    ]
};

const ReportDetail = (props) =>
    <div className="ReportDetail">
        <span>
            <h1>{reportDetail.title}</h1>
        </span>

        <span>
            {reportDetail.startDate}
            -
            {reportDetail.endDate}
        </span>

        <div>
            <dl>
                {reportDetail.kpis.map(kpi =>
                    <div key={kpi.name}>
                        <dt>{kpi.name}</dt>
                        <dd>{kpi.value}</dd>
                    </div>
                )}
            </dl>
        </div>
    </div>;

export default ReportDetail;