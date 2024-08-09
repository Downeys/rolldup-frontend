import config from '../config/config'
import { FetchWrapper } from '../utils/fetch-wrapper/FetchWrapper';

export const getProducts = async (searchStr: string) => {
    const resp = await FetchWrapper.get(`${config.EDGE.productUrl}?searchStr=${searchStr}`)
    return resp;
}

export default { getProducts }
