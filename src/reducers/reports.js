import {REPORTS} from '../actions/ReportCRUD'

const reports = (state = {list: [], maxId: 0}, action) => {
    switch(action.type) {
        case REPORTS.CREATE:
            let id = state.maxId + 1;
            let report = {
                ...action.report,
                id: id
            };

            return {
                maxId: id,
                list: [
                    ...state.list,
                    report
                ]

            };

        case REPORTS.EDIT:
            return {
                ...state,
                list: state.list.map(report => {
                    let reportId = report.id;
                    let actionReportId = action.report.id;
                    if (reportId !== actionReportId) {
                        return report;
                    }
                    return action.report;
                })
            };

        case REPORTS.DELETE:
            return {
                ...state,
                list: state.list
                    .filter((report) => report.id !== action.id)
            };

        default:
            return state;
    }
};

export default reports;