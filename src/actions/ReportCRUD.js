export const REPORTS = {
    CREATE: "REPORT_CREATE",
    DELETE: "REPORT_DELETE",
    EDIT: "REPORT_EDIT"
};

export const createReport = (campaignId, report) => ({
    type: REPORTS.CREATE,
    campaignId,
    report
});

export const editReport = (campaignId, report) => ({
    type: REPORTS.EDIT,
    campaignId,
    report
});

export const deleteReport = (campaignId, id) => ({
    type: REPORTS.DELETE,
    campaignId,
    id
});