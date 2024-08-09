import { manageToken } from "../auth/auth";

const paginatedQuery = async (url: string, cursorName, cachePolicy: RequestCache = "no-store") => {
    manageToken();
    const delimiter = url.includes('?') ? '&' : '?';
    const cursor = sessionStorage.getItem(cursorName);
    const resp = await get(`${url}${delimiter}cursor=${cursor}`, cachePolicy)
    sessionStorage.setItem(cursorName, resp.cursor)
    return resp;
}

const get = async (url, cachePolicy: RequestCache = "no-store") => {
    manageToken();
    const response: any = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        cache: cachePolicy
    })
    .then(async res => {
        if (res.status !== 204) {
            const data = await res.json()
            if (!res.ok) return Promise.reject({ message: `${res.status}: ${data.message}` })
            return data
        }
    })

    return response?.result ? response.result : response;
}

const post = async (url, body, contentType = 'application/json') => {
    manageToken();
    const headers = new Headers({ 'Content-Type': contentType })
    const response: any = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers,
        body: JSON.stringify(body)
    })
    .then(async res => {
        if (res.status !== 204) {
            const data = await res.json()
            if (!res.ok) return Promise.reject({ message: `${res.status}: ${data.message}` })
            return data
        }
    })
    return response?.result ? response.result : response;
}

const deleteQuery = async (url, body, contentType = 'application/json') => {
    manageToken();
    const headers = new Headers({ 'Content-Type': contentType })
    const response: any = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
        headers,
        body: JSON.stringify(body)
    })
    .then(async res => {
        if (res.status !== 204) {
            const data = await res.json()
            if (!res.ok) return Promise.reject({ message: `${res.status}: ${data.message}` })
            return data
        }
    })
    return response?.result ? response.result : response;
}

export const FetchWrapper = { get, post, paginatedQuery,deleteQuery }