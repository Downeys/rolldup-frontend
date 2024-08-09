import config from "../config/config";
import { FetchWrapper } from "../utils/fetch-wrapper/FetchWrapper";

export const endorseFirstLogin = async () => await FetchWrapper.post(`${config.EDGE.endorsementsUrl}/first-login`, { })

export const endorseEulaAndAge = async () => await FetchWrapper.post(`${config.EDGE.endorsementsUrl}/eula-age`, { })

export const endorseEula = async () => await FetchWrapper.post(`${config.EDGE.endorsementsUrl}/eula`, { })

export default { endorseFirstLogin, endorseEulaAndAge, endorseEula }