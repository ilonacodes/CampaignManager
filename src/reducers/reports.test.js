import ReportsReducer from "./reports";
import {createReport} from "../actions/ReportCRUD";
import {editReport} from "../actions/ReportCRUD";
import {deleteReport} from "../actions/ReportCRUD";

describe("ReportsReducer", () => {

    let firstReport = {title: "my first report"};
    let secondReport = {title: "my second report"};
    let thirdReport = {title: "my third report"};

    it("creates new report", () => {
        let action = createReport(1, firstReport);
        let newState = ReportsReducer(undefined, action);

        expect(newState.list.length).toEqual(1);
        expect(newState.list[0].title).toEqual(firstReport.title);
        expect(newState.list[0].id).toEqual(1);
    });

    it("creates two reports", () => {
        let firstAction = createReport(1, firstReport);
        let firstState = ReportsReducer(undefined, firstAction);

        let action = createReport(1, secondReport);
        let newState = ReportsReducer(firstState, action);

        expect(newState.list.length).toEqual(2);
        expect(newState.list[1].title).toEqual(secondReport.title);
        expect(newState.list[1].id).toEqual(2);
    });

    it("creates three reports", () => {
        let firstAction = createReport(1, firstReport);
        let firstState = ReportsReducer(undefined, firstAction);

        let secondAction = createReport(1, secondReport);
        let secondState = ReportsReducer(firstState, secondAction);

        let action = createReport(1, thirdReport);
        let newState = ReportsReducer(secondState, action);

        expect(newState.list.length).toEqual(3);
        expect(newState.list[2].title).toEqual(thirdReport.title);
        expect(newState.list[2].id).toEqual(3);
    });

    it("edits one report", () => {
        let report = {title: "my first report"};
        let firstAction = createReport(1, report);
        let state = ReportsReducer(undefined, firstAction);

        let reportUpdate = {title: "my first edited", id: 1};
        let action = editReport(1, reportUpdate);
        let newState = ReportsReducer(state, action);

        expect(newState.list.length).toEqual(1);
        expect(newState.list[0].title).toEqual(reportUpdate.title);
        expect(newState.list[0].id).toEqual(1);
    });

    it("edits one report from three reports", () => {
        let firstAction = createReport(1, firstReport);
        let state = ReportsReducer(undefined, firstAction);

        let secondAction = createReport(1, secondReport);
        let secondState = ReportsReducer(state, secondAction);

        let thirdAction = createReport(1, thirdReport);
        let thirdState = ReportsReducer(secondState, thirdAction);

        let reportUpdate = {title: "my third edited report", id: 3};
        let action = editReport(1, reportUpdate);
        let newState = ReportsReducer(thirdState, action);

        expect(newState.list.length).toEqual(3);
        expect(newState.list[0].title).toEqual(firstReport.title);
        expect(newState.list[1].title).toEqual(secondReport.title);
        expect(newState.list[2].title).toEqual(reportUpdate.title);
        expect(newState.list[2].id).toEqual(3);
    });

    it("edits one report and creates an another report", () => {
        let firstAction = createReport(1, firstReport);
        let state = ReportsReducer(undefined, firstAction);

        let reportEdit = {title: "my first edited report"};
        let secondAction = editReport(1, reportEdit);
        let secondState = ReportsReducer(state, secondAction);

        let action = createReport(1, secondReport);
        let newState = ReportsReducer(secondState, action);

        expect(newState.list.length).toEqual(2);
        expect(newState.list[0].title).toEqual(firstReport.title);
        expect(newState.list[1].title).toEqual(secondReport.title);
        expect(newState.list[1].id).toEqual(2);
    });
    
    it("deletes one report and a user see an empty list of reports", () => {
        let firstAction = createReport(1, firstReport);
        let state = ReportsReducer(undefined, firstAction);

        let action = deleteReport(1, 1);
        let newState = ReportsReducer(state, action);

        expect(newState.list).toEqual([]);
    });

    it("deletes the second report from a list of reports", () => {
        let firstAction = createReport(1, firstReport);
        let state = ReportsReducer(undefined, firstAction);

        let secondAction = createReport(1, secondReport);
        let secondState = ReportsReducer(state, secondAction);

        let thirdAction = createReport(1, thirdReport);
        let thirdState = ReportsReducer(secondState, thirdAction);

        let action = deleteReport(1, 2);
        let newState = ReportsReducer(thirdState, action);

        expect(newState.list.length).toEqual(2);
        expect(newState.list[0].title).toEqual(firstReport.title);
        expect(newState.list[1].title).toEqual(thirdReport.title);
    });
});