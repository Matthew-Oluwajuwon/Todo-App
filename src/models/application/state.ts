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
  }

  export interface SignUp {
    showSignUp: boolean;
  }
}
