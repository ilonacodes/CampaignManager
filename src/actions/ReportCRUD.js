export const REPORTS = {
    CREATE: "REPORT_CREATE",
    DELETE: "REPORT_DELETE",
    EDIT: "REPORT_EDIT"
};

export const createReport = (report) => ({
    type: REPORTS.CREATE,
    report
});

export const editReport = (report) => ({
    type: REPORTS.EDIT,
    report
});

export const deleteReport = (id) => ({
    type: REPORTS.DELETE,
    id
});