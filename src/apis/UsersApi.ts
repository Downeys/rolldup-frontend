import config from '../config/config'
import { FetchWrapper } from '../utils/fetch-wrapper/FetchWrapper';

export const getUserInfo = async () => await FetchWrapper.get(config.EDGE.userUrl, "reload")

export const createNewUser = async (username: string) => await FetchWrapper.post(config.EDGE.userUrl, { username })

export default { createNewUser, getUserInfo }
