import { State } from "../../models/application/state";
import { ApiResponse } from "../../models/clients/api-response";
import { UtilityConfig } from "../actions/actions";

export class UtilityThunkService {
  static GetConfig = async (dispatch: any, state: State.Config) => {
    const url = window.location.origin + "/config.json"

    await fetch(url).then((response) => response.json().then(async (settings: ApiResponse.Config) => {
        localStorage.setItem("baseUrl", settings.baseUrl as string)
        state.data =  settings;

        dispatch({
            type: UtilityConfig.SET_UTILITY_CONFIG_STATE,
            payload: {
                ...state
            }
        })
        
    }))
  };
}
