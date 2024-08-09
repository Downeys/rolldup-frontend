import config from '../config/config'
import { FetchWrapper } from '../utils/fetch-wrapper/FetchWrapper';

export const getPurchaseLocations = async (searchStr: string) => {
    const resp = await FetchWrapper.get(`${config.EDGE.purchaseLocationsUrl}?searchStr=${searchStr}`)
    return resp;
}

export default { getPurchaseLocations }
