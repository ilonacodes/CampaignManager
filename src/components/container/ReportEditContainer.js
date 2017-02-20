import {changeReportForm} from "../../actions/ReportForm";
import {hashHistory} from "react-router";
import {connect} from "react-redux";
import {editReport} from "../../actions/ReportCRUD";
import ReportEdit from "../presentation/ReportEdit";

const findCampaignById = (campaigns, id) => {
    return campaigns.find(campaign => campaign.id === id);
};

const findReportById = (reports, id) => {
    return reports.find(report => report.id === id);
};

const mapStateToProps = (state, ownProps) => {

    let campaignId = parseInt(ownProps.params.id, 10);
    let campaign = findCampaignById(state.campaigns.list, campaignId);

    let id = parseInt(ownProps.params.reportId, 10);
    let report = findReportById(campaign.reports.list, id);

    return {
        campaignId: campaignId,
        id: id,
        title: state.reportForm.report.title || report.title,
        startDate: state.reportForm.report.startDate || report.startDate,
        endDate: state.reportForm.report.endDate || report.endDate,
        reachKpi: state.reportForm.report.reachKpi || report.reachKpi,
        viewsKpi: state.reportForm.report.viewsKpi || report.viewsKpi
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTitleChange: (e) =>
            dispatch(changeReportForm({title: e.target.value})),

        onStartDateChange: (e) =>
            dispatch(changeReportForm({startDate: e.target.value})),

        onEndDateChange: (e) =>
            dispatch(changeReportForm({endDate: e.target.value})),

        onReachKpiChange: (e) =>
            dispatch(changeReportForm({reachKpi: e.target.value})),

        onViewsKpiChange: (e) =>
            dispatch(changeReportForm({viewsKpi: e.target.value})),

        onConfirm: (campaignId, report) => {
            hashHistory.push(`/campaigns/${campaignId}`);
            dispatch(editReport(campaignId, report));
        }
    };
};

export const ReportEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportEdit);