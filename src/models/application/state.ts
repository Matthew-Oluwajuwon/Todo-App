import { ApiRequest } from "../clients/api-request";
import { ApiResponse } from "../clients/api-response";

export namespace State {
  export interface Config {
    data: ApiResponse.Config;
  }

  export interface LandingPage {
    showMobileMenu: boolean;
    Login: Login;
    SignUp: SignUp;
  }

  export interface Login {
    showLogin: boolean;
    token: string;
    response: ApiResponse.ValidateUser;
  }

  export interface SignUp {
    showSignUp: boolean;
    request: ApiRequest.SignUp;
    response: ApiResponse.ValidateUser;
    processing: boolean;
  }
}
