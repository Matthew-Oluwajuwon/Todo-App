import { ApiResponse } from "../clients/api-response";

export namespace State {
  export interface Config {
    data: ApiResponse.Config;
  }

  export interface LandingPage {
    showMobileMenu: boolean;
  }
}
