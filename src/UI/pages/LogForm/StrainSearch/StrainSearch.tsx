import React from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Text from "../../../components/typography/Text/Text";
import LogFormContext, { LogFormDispatch } from "../LogFormContext/LogFormContext";
import { LogFormActionType } from "../LogFormContext/LogFormActionType.enum";
import StrainLogApi from "../../../../apis/StrainLogApi";

export const StrainSearch = () => {
    const { strainName, formElementInFocus } = React.useContext(LogFormContext);
    const dispatch = React.useContext(LogFormDispatch);

    const [state, setState] = React.useState({
        searchResults: [] as any[]
    })
    const hasFocus = React.useMemo(() => formElementInFocus === 'Strain Name', [formElementInFocus])

    const dedupeStrainNames = (strains: any[]) => {
        let names = [] as string[];
        strains.forEach(strain => {
            if(!names.includes(strain.name)) names.push(strain);
        })
        return names;
    }

    const search = React.useCallback(async (searchStr: string) => {
        const resp = await StrainLogApi.searchStrainByName(searchStr);
        const rslts =  dedupeStrainNames(resp);
        setState({ ...state, searchResults: rslts });
    }, [state])

    const handleChange = React.useCallback((str: string) => {
        dispatch({ type: LogFormActionType.UPDATE_STRAIN_NAME, payload: { strainName: str } })
        search(str);
    }, [search, dispatch])

    const handleSelection = React.useCallback((item: any) => {
        dispatch({ type: LogFormActionType.UPDATE_STRAIN_NAME, payload: { strainName: item.name } })
        dispatch({ type: LogFormActionType.CHANGE_FOCUS_ELEMENT, payload: { elementName: 'none' } })
    }, [dispatch])

    const handleFocus = () => {
        dispatch({ type: LogFormActionType.CHANGE_FOCUS_ELEMENT, payload: { elementName: 'Strain Name' } })
    }

    return (
        <div>
            <SearchBar name='Strain Name' value={strainName} onFocus={handleFocus} onChange={handleChange} iconPosition="right" border width="full" additionalStyles="mt-4 dark:bg-slate-800 dark:text-white"/>
            <div hidden={!hasFocus} className="border border-grey sticky z-10 bg-white dark:bg-slate-800">
                {state.searchResults
                .filter((res, ix) => ix < 5)
                .map(item => (
                    <div key={`menuItem-${item.name}`} onClick={() => {handleSelection(item)}}>
                        <Text size="lg" text={item.name} additionalStyles='w-full ml-4 my-1' />
                    </div>)
                )}
            </div>
        </div>
    )
}

export default StrainSearch
