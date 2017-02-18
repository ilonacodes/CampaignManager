import {REPORTS} from '../actions/ReportCRUD'

const ReportsReducer = (state = {reports: [], maxId: 0}, action) => {
    switch(action.type) {
        case REPORTS.CREATE:
            let id = state.maxId + 1;
            let report = {
                ...action.report,
                id: id
            };

            return {
                maxId: id,
                reports: [
                    ...state.reports,
                    report
                ]

            };

        case REPORTS.EDIT:
            return {
                ...state,
                reports: state.reports.map((report) => {
                    if (report.id !== action.report.id) {
                        return report;
                    }
                    return action.report;
                })
            };

        case REPORTS.DELETE:
            return {
                ...state,
                reports: state.reports
                    .filter((report) => report.id !== action.id)
            };

        default:
            return state;
    }
};

export default ReportsReducer;