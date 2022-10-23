import axios from "axios";
import { ApiResponse } from "../../models/clients/api-response";

export const GET = async (url: string): Promise<ApiResponse.API> => {
    if (sessionStorage.getItem('*****')) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('*****') as string;
    }
    let apiResponse = new ApiResponse.API();
    apiResponse = await axios
        .get(url)
        .then((response) => {
            apiResponse = response.data;
            if (apiResponse.responseCode === "0") {
                apiResponse.success = true;
            } else {
                apiResponse.success = false;
                apiResponse.responseMessage = response.data.responseMessage;
                return apiResponse;
            }
            return apiResponse;
        })
        .catch((error) => {
            if (error.response) {
                apiResponse.success = false;
                apiResponse.responseMessage =
                    "Something went wrong. Please come back later.";
                apiResponse.responseCode = "01";
                return apiResponse;
            } else {
                apiResponse.success = false;
                apiResponse.responseMessage =
                    "Service Unavailable. Please come back later.";
                apiResponse.responseCode = "10";
                return apiResponse;
            }
        });
    return apiResponse;
};

export const POST = async (
    url: string,
    request: any,
    token:string|null = null
): Promise<ApiResponse.API> => {
    if (token !== null) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    let apiResponse = new ApiResponse.API();
    apiResponse = await axios
        .post(url, request)
        .then((response) => {
            apiResponse = response.data;
            if (response.status === 200) {
                apiResponse.success = true;
                apiResponse.data = response.data
            }            
            else {
                apiResponse.success = false;
            }
            return apiResponse;
        })
        .catch(function (error) {
            console.log(error)
            if (error.code && error.code === "ERR_NETWORK") {
                apiResponse.success = false;
                apiResponse.responseCode = "16";
                apiResponse.responseMessage = error.message;
                return apiResponse;
            }
            if (!error.response) {
                apiResponse.success = false;
                apiResponse.responseCode = "10";
                apiResponse.responseMessage = "Sorry, error from the server." +
                    ' We now know the mistake. We are working to fix it. Please try again later';
                return apiResponse;
            }
            if (!error.response) {
                apiResponse.success = false;
                apiResponse.responseCode = "86";
                apiResponse.responseMessage = "Sorry, Merchant exist already."
                return apiResponse;
            }
            apiResponse.success = false;
            apiResponse.responseMessage = "Service Unvailable. Please try again.";
            apiResponse.responseCode = "99";
            if (error.response) {
                if (error.response.status === 404) {
                    apiResponse.responseCode = "404";
                } else {
                    apiResponse.responseCode = "99";
                }
                apiResponse.success = false;
                apiResponse.responseMessage = Array.isArray(error.response.data)
                    ? error.response.data.responseMessage
                    : "";
                return apiResponse;
            }
            return apiResponse;
        });
    return apiResponse;
};


