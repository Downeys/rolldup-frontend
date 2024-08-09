import AuthApi from "../../apis/AuthApi";
import config from "../../config/config";
import { login } from "../../lib/functions/authFuncs";

export const callbackUri = `${window.location.protocol}//${window.location.host}/auth_callback`;

export const fetchFreshToken = async () => {
    try {
        await AuthApi.exchangeRefreshTokenForAuthCookies()
    } catch (e: any) {
        console.log("An error occurred when refreshing the token: " + e.message)
    }
}

const isTokenReadyForRefresh = () => {
    const expiration = Number(localStorage.getItem("exp") || 0);
    return expiration !== 0 && expiration - (Date.now() / 1000) < config.AUTH.refreshThreshold;
}

export const manageToken = async () => {
    if (isTokenReadyForRefresh()) {
        const res: any = await AuthApi.exchangeRefreshTokenForAuthCookies();
        if (!res.authenticated) {
            await login();
        }
    }
}
