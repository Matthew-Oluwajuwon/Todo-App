import { Notify } from "./../../shared/component/notfication";
import { State } from "../../models/application/state";
import { LandingPage } from "../actions/actions";
import { AuthController } from "../api/auth-controller";
import { POST } from "../api/method";
import { store } from "../store";
import { ApiResponse } from "../../models/clients/api-response";

export class TodoThunkService {
  static SignUpUser = async (state: State.LandingPage) => {
    const response = await POST(
      `${localStorage.getItem("baseUrl")}${AuthController.signUp}`,
      state.SignUp?.request
    );
    const user: ApiResponse.ValidateUser = response.data;
    sessionStorage.setItem("secretKey", user?.token as string);
    if (response.success) {
      store.dispatch({
        type: LandingPage.SET_LANDING_PAGE_STATE,
        payload: {
          ...state,
          SignUp: {
            ...state.SignUp,
            showSignUp: false,
            processing: false,
            response: user,
          },
        },
      });
      Notify("Successful", true);
    } else {
      store.dispatch({
        type: LandingPage.SET_LANDING_PAGE_STATE,
        payload: {
          ...state,
          SignUp: {
            ...state.SignUp,
            showSignUp: false,
            processing: false,
          },
        },
      });
      Notify(response.responseMessage as string, false);
    }
  };
}
