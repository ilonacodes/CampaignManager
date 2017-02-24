import React from "react";
import {Link} from "react-router";

const ReportEdit = ({id, title, onTitleChange, startDate, onStartDateChange, endDate, onEndDateChange, reachKpi, onReachKpiChange, viewsKpi, onViewsKpiChange, onConfirm, campaignId}) => {

    const onClick = (e) =>
        onConfirm(campaignId, {id, title, startDate, endDate, reachKpi, viewsKpi});

    return <div>
        <div className="ReportEdit container-fluid">
            <div className="row">
                <div className="col-xs-2">
                    <Link className="glyphicon glyphicon-chevron-left Back"
                          to={`/campaigns/${campaignId}`} />
                </div>
                <div className="col-xs-8 text-center"><h1>Edit Report</h1></div>
            </div>

            <div className="row">
                <div className="col-xs-2"></div>
                <div className="col-xs-8">
                    <input className="form-control"
                           type="text"
                           placeholder="Report title"
                           value={title}
                           onChange={onTitleChange}/>

                    <input className="form-control"
                           type="date"
                           placeholder="Start date"
                           value={startDate}
                           onChange={onStartDateChange}/>

                    <input className="form-control"
                           type="date"
                           placeholder="End date"
                           value={endDate}
                           onChange={onEndDateChange}/>

                    <input className="form-control"
                           type="number"
                           placeholder="Reach KPI"
                           value={reachKpi}
                           onChange={onReachKpiChange}/>

                    <input className="form-control"
                           type="number"
                           placeholder="Views KPI"
                           value={viewsKpi}
                           onChange={onViewsKpiChange}/>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-5"></div>
                <div className="col-xs-2">
                    <button className="btn btn-success form-control" onClick={onClick}>Submit</button>
                </div>
            </div>
        </div>
    </div>;
};

export default ReportEdit;