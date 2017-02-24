import campaigns from "./campaigns";
import { combineReducers } from "redux";
import {campaignForm} from "./campaignForm";
import {reportForm} from "./reportForm";
import {filter} from "./filter";

const AppReducer = combineReducers({
    campaigns,
    campaignForm,
    reportForm,
    filter
});

export default AppReducer;