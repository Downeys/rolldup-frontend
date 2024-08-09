import config from '../config/config'
import { FetchWrapper } from '../utils/fetch-wrapper/FetchWrapper';

export const searchStrainByName = async (name: string) => await FetchWrapper.get(`${config.EDGE.logUrl}/strain?name=${name}`)

export const createNewStrainLog = async (log) => {
    let response;
    try {
        response = await fetch(config.EDGE.logUrl, {
            method: 'POST',
            credentials: 'include',
            body: log
        })
    } catch(e: any) {
        console.log(e.message);
        throw e;
    }
    if (response.status !== 200) throw new Error(response.error || 'An error occurred while posting a rating.')
    return response.result;
}

export const updateStrainLog = async (log) => {
    let response;
    try {
        response = await fetch(config.EDGE.logUrl, {
            method: 'PUT',
            credentials: 'include',
            body: log
        })
    } catch(e: any) {
        console.log(e.message);
        throw e;
    }
    if (response.status !== 200) throw new Error(response.error || 'An error occurred while updating a post.')
    return response.result;
}

export const getStrainLogById = async (id: number) => await FetchWrapper.get(`${config.EDGE.logUrl}?id=${id}`)

export const addCommentToLog = async (comment) => await FetchWrapper.post(`${config.EDGE.logUrl}/comment`, comment)

export const addFavorite = async (recipient, logId) => await FetchWrapper.post(`${config.EDGE.logUrl}/favorite`, { recipient, logId })

export const removeFavorite = async (logId) => await FetchWrapper.deleteQuery(`${config.EDGE.logUrl}/favorite`, { logId })

export const addBookmark = async (logId) => await FetchWrapper.post(`${config.EDGE.logUrl}/bookmark`, { logId })

export const removeBookmark = async (logId) => await FetchWrapper.deleteQuery(`${config.EDGE.logUrl}/bookmark`, { logId })

export const removeStrainLog = async (logId) => await FetchWrapper.deleteQuery(`${config.EDGE.logUrl}/`, { logId })

export default { removeBookmark, addBookmark, addFavorite, removeFavorite, addCommentToLog, createNewStrainLog, searchStrainByName, removeStrainLog, updateStrainLog, getStrainLogById };