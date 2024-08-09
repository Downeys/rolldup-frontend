import config from '../config/config'
import { FetchWrapper } from '../utils/fetch-wrapper/FetchWrapper';

export const getAllStrainLogs = async () => {
    const resp = await FetchWrapper.paginatedQuery(`${config.EDGE.feedUrl}`, "homeFeedCursor");
    return resp.feed;
}

export const getHighestRatedFeed = async () => {
    const resp = await FetchWrapper.paginatedQuery(`${config.EDGE.feedUrl}/rating`, "homeFeedCursor");
    return resp.feed;
}

export const getMostCommentedFeed = async () => {
    const resp = await FetchWrapper.paginatedQuery(`${config.EDGE.feedUrl}/most-commented`, "homeFeedCursor");
    return resp.feed;
}

export const getMostFavoritedFeed = async () => {
    const resp = await FetchWrapper.paginatedQuery(`${config.EDGE.feedUrl}/most-favorited`, "homeFeedCursor");
    return resp.feed;
}

export const getPersonalLogs = async () => await FetchWrapper.get(`${config.EDGE.feedUrl}/personal`)

export const getLogsByStrainName = async (searchStr: string) => {
    const resp = await FetchWrapper.paginatedQuery(`${config.EDGE.feedUrl}/search?searchStr=${searchStr}`, "searchCursor")
    return resp.feed;
}

export default { getAllStrainLogs, getPersonalLogs, getHighestRatedFeed, getMostCommentedFeed, getMostFavoritedFeed, getLogsByStrainName }