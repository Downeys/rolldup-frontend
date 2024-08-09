import config from "../config/config";
import { FetchWrapper } from "../utils/fetch-wrapper/FetchWrapper";

export const sendFeedback = async (message: string) => await FetchWrapper.post(`${config.EDGE.feedbackUrl}/user-feedback`, { message })

export const sendHelpRequest = async (message: string) => await FetchWrapper.post(`${config.EDGE.feedbackUrl}/help`, { message })

export const reportContent = async (contentId: number, contentType: string) => await FetchWrapper.post(`${config.EDGE.feedbackUrl}/report`, { contentId, contentType })

export default { sendFeedback, sendHelpRequest, reportContent }