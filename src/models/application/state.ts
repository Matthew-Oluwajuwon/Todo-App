import { ApiRequest } from "../clients/api-request";
import { ApiResponse } from "../clients/api-response";

export namespace State {
  export interface LandingPage {
    showMobileMenu: boolean;
    Todos: Todos
  }

  export interface Todos {
    response: Array<ApiResponse.Todos>;
    request: ApiRequest.Todo
  }

}
