import config from "../config/config";

export const exchangeCodeForAuthCookies = async (clientId: string, code: string, redirectUri: string, codeVerifier: string) => {
    const body = { clientId, code, redirectUri, codeVerifier }
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const response: any = await fetch(`${config.EDGE.authUrl}/exchange-code-for-auth-cookies`, {
        method: 'POST',
        credentials: 'include',
        headers,
        body: JSON.stringify(body)
    })
    .then(res => {
        return res.json();
    })
    .catch((e) => {
        console.log(e.message)
    })
    return response;
}

export const exchangeRefreshTokenForAuthCookies = async () => {
    const body = {}
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const response: any = await fetch(`${config.EDGE.authUrl}/exchange-refresh-token-for-auth-cookies`, {
        method: 'POST',
        credentials: 'include',
        headers,
        body: JSON.stringify(body)
    })
    .then(res => {
        return res.json();
    })
    .catch((e) => {
        console.log(e.message)
    })
    return response;
}

export const removeAuthCookies = async () => {
    const body = {}
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const response: any = await fetch(`${config.EDGE.authUrl}/delete-auth-cookies`, {
        method: 'POST',
        credentials: 'include',
        headers,
        body: JSON.stringify(body)
    })
    .then(() => true)
    .catch((e: any) => {
        console.log(e.message)
        return false;
    });
}

export const getMe = async () => {
    const response: any = await fetch(`${config.EDGE.authUrl}/me`, {
        method: 'GET',
        credentials: 'include'
    })
    .then(res => {
        return res.json();
    })
    .catch((e) => {
        console.log(e.message)
    })
    return response;
}

export default { exchangeCodeForAuthCookies, exchangeRefreshTokenForAuthCookies, removeAuthCookies, getMe }