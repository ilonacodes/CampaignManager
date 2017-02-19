import campaigns from "./campaigns";
import { combineReducers } from "redux";
import {campaignForm} from "./campaignForm";
import {reportForm} from "./reportForm";

const AppReducer = combineReducers({
    campaigns,
    campaignForm,
    reportForm
});

export default AppReducer;