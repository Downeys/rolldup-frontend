interface ENV {
    REACT_APP_BACKEND_API_BASE_URL: string | undefined;
    REACT_APP_CLIENT_ID: string | undefined;
    REACT_APP_ADB2C_AUTHORITY_BASE_URL: string | undefined;
    REACT_APP_ENVIRONMENT: string | undefined;
    REACT_APP_INSIGHTS_CONNECTION_STRING: string | undefined;
    REACT_APP_LOGOUT_REDIRECT_URL: string | undefined;
    REACT_APP_AAD_PRIMARY_POLICY: string | undefined;
    REACT_APP_AAD_FORGOT_PASSWORD_POLICY: string | undefined;
    REACT_APP_AAD_EDIT_PROFILE_POLICY: string | undefined;
}

interface IEdgeEndpoints {
    logUrl: string;
    feedUrl: string;
    userUrl: string;
    settingsUrl: string;
    endorsementsUrl: string;
    feedbackUrl: string;
    notificationUrl: string;
    authUrl: string;
    insightsConnectionString: string | undefined;
    badgeUrl: string;
    purchaseLocationsUrl: string;
    brandUrl: string;
    productUrl: string;
}

interface IAuth {
    adb2cAuthorityBaseUrl: string;
    adb2cAuthorityDomain: string;
    clientId: string;
    refreshThreshold: number;
    environment: string;
    logoutRedirectUrl: string;
    primaryPolicyName: string;
    forgotPassWordPolicyName: string;
    editProfilePolicyName: string;
}

interface Config {
    EDGE: IEdgeEndpoints;
    AUTH: IAuth;
}

declare global {
    interface Window {
        env: ENV;
    }
}

const getConfig = (): ENV => {
    if (process.env.NODE_ENV === "production") {
        return {
            REACT_APP_BACKEND_API_BASE_URL: window.env.REACT_APP_BACKEND_API_BASE_URL,
            REACT_APP_CLIENT_ID: window.env.REACT_APP_CLIENT_ID,
            REACT_APP_ADB2C_AUTHORITY_BASE_URL: window.env.REACT_APP_ADB2C_AUTHORITY_BASE_URL,
            REACT_APP_ENVIRONMENT: window.env.REACT_APP_ENVIRONMENT,
            REACT_APP_INSIGHTS_CONNECTION_STRING: window.env.REACT_APP_INSIGHTS_CONNECTION_STRING,
            REACT_APP_LOGOUT_REDIRECT_URL: window.env.REACT_APP_LOGOUT_REDIRECT_URL,
            REACT_APP_AAD_PRIMARY_POLICY: window.env.REACT_APP_AAD_PRIMARY_POLICY,
            REACT_APP_AAD_FORGOT_PASSWORD_POLICY: window.env.REACT_APP_AAD_FORGOT_PASSWORD_POLICY,
            REACT_APP_AAD_EDIT_PROFILE_POLICY: window.env.REACT_APP_AAD_EDIT_PROFILE_POLICY,
        };
    }
    return {
        REACT_APP_BACKEND_API_BASE_URL: process.env.REACT_APP_BACKEND_API_BASE_URL,
        REACT_APP_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
        REACT_APP_ADB2C_AUTHORITY_BASE_URL: process.env.REACT_APP_ADB2C_AUTHORITY_BASE_URL,
        REACT_APP_ENVIRONMENT: process.env.NODE_ENV,
        REACT_APP_INSIGHTS_CONNECTION_STRING: process.env.REACT_APP_INSIGHTS_CONNECTION_STRING,
        REACT_APP_LOGOUT_REDIRECT_URL: process.env.REACT_APP_LOGOUT_REDIRECT_URL,
        REACT_APP_AAD_PRIMARY_POLICY: process.env.REACT_APP_AAD_PRIMARY_POLICY,
        REACT_APP_AAD_FORGOT_PASSWORD_POLICY: process.env.REACT_APP_AAD_FORGOT_PASSWORD_POLICY,
        REACT_APP_AAD_EDIT_PROFILE_POLICY: process.env.REACT_APP_AAD_EDIT_PROFILE_POLICY,
    };
};

const backendApiUrl = (config: ENV, path: string): string =>
    `${config.REACT_APP_BACKEND_API_BASE_URL}${path}`;

const getSanitizedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined && key !== 'REACT_APP_INSIGHTS_CONNECTION_STRING') {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }

    const EDGE: IEdgeEndpoints = {
        logUrl: backendApiUrl(config, 'logs') || 'http://localhost:8080/logs',
        feedUrl: backendApiUrl(config, 'feed') || 'http://localhost:8080/feed',
        userUrl: backendApiUrl(config, 'users') || 'http://localhost:8080/users',
        settingsUrl: backendApiUrl(config, 'settings') || 'http://localhost:8080/settings',
        endorsementsUrl: backendApiUrl(config, 'endorsements') || 'http://localhost:8080/endorsements',
        feedbackUrl: backendApiUrl(config, 'feedback') || 'http://localhost:8080/feedback',
        notificationUrl: backendApiUrl(config, 'notifications') || 'http://localhost:8080/notifications',
        authUrl: backendApiUrl(config, 'auth') || 'http://localhost:8080/auth',
        insightsConnectionString: config.REACT_APP_INSIGHTS_CONNECTION_STRING,
        badgeUrl: backendApiUrl(config, 'badges') || 'http://localhost:8080/badges',
        purchaseLocationsUrl: backendApiUrl(config, 'purchase-locations') || 'http://localhost:8080/purchase-locations',
        brandUrl: backendApiUrl(config, 'brand') || 'http://localhost:8080/brand',
        productUrl: backendApiUrl(config, 'product') || 'http://localhost:8080/product',
    };

    const adb2cAuthorityBaseUrl = config.REACT_APP_ADB2C_AUTHORITY_BASE_URL || '';

    const AUTH: IAuth = {
        adb2cAuthorityBaseUrl: adb2cAuthorityBaseUrl,
        adb2cAuthorityDomain: new URL(adb2cAuthorityBaseUrl).hostname,
        clientId: config.REACT_APP_CLIENT_ID || '',
        refreshThreshold: 300, //refresh 5 minutes before token expires
        environment: config.REACT_APP_ENVIRONMENT || process.env.NODE_ENV,
        logoutRedirectUrl: config.REACT_APP_LOGOUT_REDIRECT_URL || 'http://localhost:3000/',
        primaryPolicyName: `${config.REACT_APP_AAD_PRIMARY_POLICY}`,
        forgotPassWordPolicyName: `${config.REACT_APP_AAD_FORGOT_PASSWORD_POLICY}`,
        editProfilePolicyName: `${config.REACT_APP_AAD_EDIT_PROFILE_POLICY}`,
    }

    const sanitizedConfig = {
        EDGE,
        AUTH
    };

    return sanitizedConfig as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;