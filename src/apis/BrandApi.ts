import config from '../config/config'
import { FetchWrapper } from '../utils/fetch-wrapper/FetchWrapper';

export const getBrands = async (searchStr: string) => {
    const resp = await FetchWrapper.get(`${config.EDGE.brandUrl}?searchStr=${searchStr}`)
    return resp;
}

export default { getBrands }
