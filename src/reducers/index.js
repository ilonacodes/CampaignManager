import campaigns from "./campaigns";
import { combineReducers } from "redux";
import {campaignForm} from "./campaignForm";

const AppReducer = combineReducers({
    campaigns,
    campaignForm
});

export default AppReducer;