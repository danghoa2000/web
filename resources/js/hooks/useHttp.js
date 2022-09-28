import axios from "axios";
import { createBrowserHistory } from "history";
import {
    ADMIN_SESSION_ACCESS_TOKEN,
    getAccessToken,
} from "../utils/sessionHelper";

export const axiosClient = axios.create();
const history = createBrowserHistory();

axiosClient.defaults.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

axiosClient.interceptors.request.use(function (config) {
    let token = getAccessToken();
    const paths = history.location.pathname;
    const arrayPaths = paths.split("/");
    if (arrayPaths[1] === "admin") {
        token = window.sessionStorage.getItem(ADMIN_SESSION_ACCESS_TOKEN);
    }
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
});

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;
