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
}