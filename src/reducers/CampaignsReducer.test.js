import {createCampaign} from "../actions/CampaignCRUD";
import CampaignsReducer from "./CampaignsReducer";

describe("CampaignsReducer", () => {

    let firstCampaign = {title: "my first campaign"};
    let secondCampaign = {title: "my second campaign"};
    let thirdCampaign = {title: "my third campaign"};

    it("creates new campaign", () => {
        let action = createCampaign(firstCampaign);
        let newState = CampaignsReducer(undefined, action);

        expect(newState.campaigns.length).toEqual(1);
        expect(newState.campaigns[0].title).toEqual(firstCampaign.title);
        expect(newState.campaigns[0].id).toEqual(1);
    });

    it("creates two campaigns", () => {
        let firstAction = createCampaign(firstCampaign);
        let state = CampaignsReducer(undefined, firstAction);

        let action = createCampaign(secondCampaign);
        let newState = CampaignsReducer(state, action);

        expect(newState.campaigns.length).toEqual(2);
        expect(newState.campaigns[1].title).toEqual(secondCampaign.title);
        expect(newState.campaigns[1].id).toEqual(2);
    });

    it("creates three campaigns", () => {
        let firstAction = createCampaign(firstCampaign);
        let state = CampaignsReducer(undefined, firstAction);

        let secondAction = createCampaign(secondCampaign);
        let secondState = CampaignsReducer(state, secondAction);

        let action = createCampaign(thirdCampaign);
        let newState = CampaignsReducer(secondState, action);

        expect(newState.campaigns.length).toEqual(3);
        expect(newState.campaigns[2].title).toEqual(thirdCampaign.title);
        expect(newState.campaigns[2].id).toEqual(3);
    });
});