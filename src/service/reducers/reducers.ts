import { LandingPage } from "../actions/actions";
import { ActionModel } from "./../../models/application/actionModel";
export class TodoStateReducer {
  static GetLandingPage(state: any = {}, action: ActionModel) {
    switch (action.type) {
      case LandingPage.SET_LANDING_PAGE_STATE:
        return action.payload;
      default:
        return state;
    }
  }
}
