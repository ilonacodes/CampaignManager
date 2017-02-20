import React from 'react'

const ReportEdit = ({id, title, onTitleChange, startDate, onStartDateChange, endDate, onEndDateChange, reachKpi, onReachKpiChange, viewsKpi, onViewsKpiChange, onConfirm, campaignId}) => {

    const onClick = (e) =>
        onConfirm(campaignId, {id, title, startDate, endDate, reachKpi, viewsKpi});

    return <div>
        <div>
            <input type="text"
                   placeholder="Report title"
                   value={title}
                   onChange={onTitleChange}/>
        </div>

        <div>
            <input type="date"
                   placeholder="Start date"
                   value={startDate}
                   onChange={onStartDateChange}/>
        </div>

        <div>
            <input type="date"
                   placeholder="End date"
                   value={endDate}
                   onChange={onEndDateChange}/>
        </div>

        <div>
            <input type="number"
                   placeholder="Reach KPI"
                   value={reachKpi}
                   onChange={onReachKpiChange}/>
        </div>

        <div>
            <input type="number"
                   placeholder="Views KPI"
                   value={viewsKpi}
                   onChange={onViewsKpiChange}/>
        </div>

        <button onClick={onClick}>Submit</button>
    </div>;

};

export default ReportEdit;