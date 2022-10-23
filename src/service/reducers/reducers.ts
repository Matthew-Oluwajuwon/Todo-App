import { TodoThunkService } from "./../thunk/thunk";
import { LandingPage } from "../actions/actions";
import { ActionModel } from "./../../models/application/actionModel";
export class TodoStateReducer {
  static GetLandingPage(state: any = {}, action: ActionModel) {
    switch (action.type) {
      case LandingPage.SET_LANDING_PAGE_STATE:
        return action.payload;
      case LandingPage.SET_LOGIN_PAGE_STATE:
        return action.payload;
      case LandingPage.SET_SIGN_UP_PAGE_STATE:
        return action.payload;
      case LandingPage.CREATE_USER:
        TodoThunkService.SignUpUser(action.payload);
        return action.payload;
      default:
        return state;
    }
  }
}
