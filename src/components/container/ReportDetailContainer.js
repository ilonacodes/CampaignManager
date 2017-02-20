import ReportDetail from "../presentation/ReportDetail";
import {connect} from "react-redux";

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
        title: report.title,
        startDate: report.startDate,
        endDate: report.endDate,
        reachKpi: report.reachKpi,
        viewsKpi: report.viewsKpi
    };
    
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const ReportDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportDetail);