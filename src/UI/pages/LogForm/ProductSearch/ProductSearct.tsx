import React from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Text from "../../../components/typography/Text/Text";
import LogFormContext, { LogFormDispatch } from "../LogFormContext/LogFormContext";
import { LogFormActionType } from "../LogFormContext/LogFormActionType.enum";
import ProductApi from "../../../../apis/ProductApi";

export const ProductSearch = () => {
    const { productName, formElementInFocus } = React.useContext(LogFormContext);
    const dispatch = React.useContext(LogFormDispatch);

    const [state, setState] = React.useState({
        searchResults: [] as any[]
    })
    const hasFocus = React.useMemo(() => formElementInFocus === 'Product', [formElementInFocus])

    const search = React.useCallback(async (searchStr: string) => {
        const resp = await ProductApi.getProducts(searchStr);
        if (!resp || resp.length === 0) setState({ ...state, searchResults: [] });
        else setState({ ...state, searchResults: resp });
    }, [state])

    const handleChange = React.useCallback((str: string) => {
        dispatch({ type: LogFormActionType.UPDATE_PRODUCT, payload: { productName: str, productId: -1 } })
        search(str);
    }, [search, dispatch])

    const handleSelection = React.useCallback((item: any) => {
        dispatch({ type: LogFormActionType.UPDATE_PRODUCT, payload: { productName: item.name, productId: item.id } })
        dispatch({ type: LogFormActionType.CHANGE_FOCUS_ELEMENT, payload: { elementName: 'none' } })
    }, [dispatch])

    const handleFocus = () => {
        dispatch({ type: LogFormActionType.CHANGE_FOCUS_ELEMENT, payload: { elementName: 'Product' } })
    }

    return (
        <div>
            <SearchBar name='Product' value={productName} onFocus={handleFocus} onChange={handleChange} iconPosition="right" border width="full" additionalStyles="mt-4 dark:bg-slate-800 dark:text-white"/>
            <div hidden={!hasFocus} className="border border-grey sticky z-10 bg-white dark:bg-slate-800 py-1">
                {state.searchResults
                .filter((res, ix) => ix < 5)
                .map(item => (
                    <div key={`menuItem-${item.id}`} onClick={() => {handleSelection(item)}} className="my-1">
                        <Text size="lg" text={item.name} additionalStyles='w-full ml-4' />
                        {item.street1 && item.city && item.stateCode && <Text size="sm" text={`${item.street1}, ${item.city}, ${item.stateCode}`} additionalStyles='w-full ml-4' />}
                    </div>)
                )}
            </div>
        </div>
    )
}

export default ProductSearch
