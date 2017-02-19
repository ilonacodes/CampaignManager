import {REPORT_FORM} from "../actions/ReportForm";

export const reportForm = (state = {
    report: {
        title: "",
        startDate: "",
        endDate: "",
        reachKpi: 0,
        viewsKpi: 0
    }
}, action) => {
    switch (action.type) {
        case REPORT_FORM.CHANGE:
            return {
                report: {
                    ...state.report,
                    ...action.change
                }
            };

        default:
            return state;
    }
};