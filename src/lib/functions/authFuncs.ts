import AuthApi from "../../apis/AuthApi";
import UsersApi from "../../apis/UsersApi";
import config from "../../config/config";
import { callbackUri } from "../../utils/auth/auth";
import { newPkceChallenge } from "./pkce";

export const CODE_VERIFIER_SESSION_STORAGE_KEY = 'verifier';

export const checkUser = async () => {
    try {
        const userInfo = await AuthApi.getMe();
        return userInfo;
    } catch (e: any) {
        console.log("failed to validate user: " + e.message)
        throw e;
    }
}

export const login = async () => {
    const { challenge, verifier } = await newPkceChallenge();
    sessionStorage[CODE_VERIFIER_SESSION_STORAGE_KEY] = verifier;
    const authorizeEndpoint = new URL(`${config.AUTH.adb2cAuthorityBaseUrl}${config.AUTH.primaryPolicyName}/oauth2/v2.0/authorize`);
    const queryParams = authorizeEndpoint.searchParams;
    queryParams.append('client_id', config.AUTH.clientId);
    queryParams.append('response_type', 'code');
    queryParams.append('redirect_uri', callbackUri);
    queryParams.append('response_mode', 'query');
    queryParams.append('scope', `${config.AUTH.clientId} openid offline_access profile`);
    queryParams.append('code_challenge_method', 'S256');
    queryParams.append('code_challenge', challenge);
    window.location.href = authorizeEndpoint.href;
}

export const logout = async () => {
    localStorage.removeItem('last')
    localStorage.removeItem('exp')
    await AuthApi.removeAuthCookies();
    sessionStorage.clear();
    const logoutRedirectUrl = encodeURI(config.AUTH.logoutRedirectUrl);
    window.location.href = `${config.AUTH.adb2cAuthorityBaseUrl}${config.AUTH.primaryPolicyName}/oauth2/v2.0/logout?post_logout_redirect_uri=${logoutRedirectUrl}`
}

export const forgotPassword = async () => {
    const { challenge, verifier } = await newPkceChallenge();
    sessionStorage[CODE_VERIFIER_SESSION_STORAGE_KEY] = verifier;
    const authorizeEndpoint = new URL(`${config.AUTH.adb2cAuthorityBaseUrl}${config.AUTH.primaryPolicyName}/oauth2/v2.0/authorize`);
    const queryParams = authorizeEndpoint.searchParams;
    queryParams.append('p', config.AUTH.forgotPassWordPolicyName);
    queryParams.append('client_id', config.AUTH.clientId);
    queryParams.append('nonce', 'defaultNonce');
    queryParams.append('redirect_uri', callbackUri);
    queryParams.append('scope', `openid`);
    queryParams.append('response_type', 'code');
    queryParams.append('prompt', 'login');
    queryParams.append('code_challenge_method', 'S256');
    queryParams.append('code_challenge', challenge);
    window.location.href = authorizeEndpoint.href;
}

export const retrieveUserInfo = async () => {
    try {
        return await UsersApi.getUserInfo()
    } catch (e) {
        console.log("Failed to retrieve user info" + e)
        throw e;
    }
}
