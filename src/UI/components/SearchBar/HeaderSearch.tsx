import React from "react"
import SearchBar from "./SearchBar";
import { Text } from "../typography/Text/Text";

interface ISearchProps {
    searchStr?: string;
    searchResults: any[];
    hasFocus?: boolean;
    onSearch: (searchStr: string) => void;
    onSelect: (item: any) => void;
    takeFocus: (element: any) => void;
}

interface ISearchState {
    searchStr: string;
}

export const HeaderSearch = (props: ISearchProps) => {
    var searchResults = props.searchResults;
    var previewVisible = props.searchResults.length > 0 && props.hasFocus;

    const [state, setState] = React.useState<ISearchState>({
        searchStr: props.searchStr || ''
    })

    const handleChange = (str: string) => {
        setState({ ...state, searchStr: str })
        // props.onSelect({ strainName: str })
        props.onSearch(str)
    }

    const handleSelection = (item: any) => {
        setState({ ...state, searchStr: item.name })
        props.onSelect({ strainName: item.name })
        props.takeFocus({ focus: 'none' })
    }

    const handleFocus = () => {
        setState({ ...state, searchStr: state.searchStr === 'Strain Name' ? '' : state.searchStr})
        props.takeFocus('Strain Name')
    }
    return (
        <div className="w-full h-full">
            <div>
                <SearchBar name='Search' value={state.searchStr} onSubmit={handleSelection} onFocus={handleFocus} onChange={handleChange} iconPosition="right" border height="sm" />
            </div>
            {previewVisible && <div className="fixed top-0 left-0 h-full w-full flex justify-center" onClick={() => props.takeFocus({ focus: 'none' })}>
                <div className="fixed top-11 w-screen max-w-sm flex justify-between">
                    <div className="w-9 ml-3 flex-shrink-0" />
                    <div className="h-full w-full border border-grey z-10 bg-white dark:bg-slate-800 dark:text-white" onBlur={() => props.takeFocus({ focus: 'none' })} >
                        {searchResults
                        .filter((res, ix) => ix < 5)
                        .map(item => (
                            <div key={`menuItem-${item.name}`} onClick={() => {handleSelection(item)}} className='w-full bg-white dark:bg-slate-800'>
                                <Text size="lg" text={item.name} additionalStyles='w-full ml-4 my-1' />
                            </div>)
                        )}
                    </div>
                    <div className="w-9 flex-shrink-0 mr-3 ml-2" />
                </div>
            </div>}
        </div>
    )
}

export default HeaderSearch