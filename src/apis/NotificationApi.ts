import config from '../config/config'
import { FetchWrapper } from '../utils/fetch-wrapper/FetchWrapper';

export const getNotis = async () => {
    const resp = await FetchWrapper.paginatedQuery(config.EDGE.notificationUrl, "notiCursor", "reload")
    return resp.notiViews;
}

export const getUnreadNotis = async () => await FetchWrapper.get(`${config.EDGE.notificationUrl}/unread`, "reload")

export const dismissNotifications = async (notificationIds: number[]) =>
    await FetchWrapper.post(`${config.EDGE.notificationUrl}/dismiss`, { notificationIds });

export default { 
    getNotis,
    getUnreadNotis,
    dismissNotifications,
};
