import { UtilityConfig } from "../actions/actions";
import { ActionModel } from "./../../models/application/actionModel";

export class UtilityStateReducer {
  static GetConfig(state: any = {}, action: ActionModel) {
    switch (action.type) {
      case UtilityConfig.SET_UTILITY_CONFIG_STATE:
        return action.payload;
      default:
        return state;
    }
  }
}
