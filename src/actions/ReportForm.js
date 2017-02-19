export const REPORT_FORM = {
    CHANGE: "REPORT_FORM_CHANGE"
};

export const changeReportForm = (change) => ({
    type: REPORT_FORM.CHANGE,
    change
});