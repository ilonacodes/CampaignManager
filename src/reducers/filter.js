import {FILTER} from "../actions/Filter";
import {ROUTER} from "../actions/Router";

export const filter = (state = "", action) => {
    switch (action.type) {
        case FILTER.CHANGE:
            return action.newFilter;
        
        case ROUTER.CHANGED:
            return "";
        
        default:
            return state;
    }
};