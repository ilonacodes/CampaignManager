import {changeReportForm} from "../../actions/ReportForm";
import {createReport} from "../../actions/ReportCRUD";
import ReportCreate from "../presentation/ReportCreate";
import {hashHistory} from "react-router";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        campaignId: parseInt(ownProps.params.id, 10),
        title: state.reportForm.report.title,
        startDate: state.reportForm.report.startDate,
        endDate: state.reportForm.report.endDate,
        reachKpi: state.reportForm.report.reachKpi,
        viewsKpi: state.reportForm.report.viewsKpi
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
            dispatch(createReport(campaignId, report));
        }
    };
};

export const ReportCreateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportCreate);