import {REPORT_FORM} from "../actions/ReportForm";
import {ROUTER} from "../actions/Router";

export const reportForm = (state = {
    report: {
        title: null,
        startDate: null,
        endDate: null,
        reachKpi: null,
        viewsKpi: null
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

        case ROUTER.CHANGED:
            return {report: {
                title: null,
                startDate: null,
                endDate: null,
                reachKpi: null,
                viewsKpi: null
            }};

        default:
            return state;
    }
};