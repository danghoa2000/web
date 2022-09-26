import axios from "axios";
import { getAccessToken } from "../utils/sessionHelper";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://example.com/api/v1";

axiosClient.defaults.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

axios.interceptors.request.use(function (config) {
    const token = getAccessToken();
    if (token) {
        config.defaults.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;
