export namespace ApiResponse {
  export class Config {
    baseUrl?: string;
  }

  export class API {
    responseCode?: string;
    responseMessage?: string;
    data?: any;
    success?: boolean;
  }

  export class ValidateUser {
        name?: string;
        username?: string;
        token?: string;
        email?: string;
  }
}
