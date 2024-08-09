import React from "react"
import { SearchBar } from "./SearchBar"
import { Text } from "../typography/Text/Text"

interface ISearchProps {
    searchStr?: string;
    searchResults: any[];
    hasFocus: boolean;
    onSearch: (searchStr: string) => void;
    onSelect: (item: any) => void;
    takeFocus: (element: string) => void;
}

export const LogStrainSearch = (props: ISearchProps) => {
    const [searchStr, setSearchStr] = React.useState(props.searchStr || '' )

    React.useEffect(() => {
        if (props.searchStr) setSearchStr(props.searchStr)
    }, [props.searchStr])

    const handleChange = (str: string) => {
        setSearchStr(str)
        props.onSelect(str)
        props.onSearch(str)
    }

    const handleSelection = (item: any) => {
        setSearchStr(item.name)
        props.onSelect(item.name)
        props.takeFocus('none')
    }

    const handleFocus = () => {
        setSearchStr(searchStr === 'Strain Name' ? '' : searchStr)
        props.takeFocus('Strain Name')
    }
    return (
        <div>
            <SearchBar name='Strain Name' value={searchStr} onFocus={handleFocus} onChange={handleChange} iconPosition="right" border width="full" additionalStyles="mt-4 dark:bg-slate-800 dark:text-white"/>
            <div hidden={!props.hasFocus} className="border border-grey sticky z-10 bg-white dark:bg-slate-800">
                {props.searchResults
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

export default LogStrainSearch





 // const [pageNumber, setPageNumber] = React.useState(1)
    // const [strains, setStrains] = React.useState([...mockStrainLogs])
    // const [scrolling, setScrolling] = React.useState(false)
    // const [scrollTop, setScrollTop] = React.useState(0)

    // React.useEffect(() => {
    //     (async () => {
    //         const strainRes: any [] = await getAllStrainLogs();
    //         setStrains(strainRes);
    //     })()
    // }, [])

    // React.useEffect(() => {
    //     if (searchStr === '') {
    //         setStrains(getStrainsByPage(pageNumber))
    //     } else {
    //         setStrains(getStrainsByName(searchStr))
    //     }
    // }, [searchStr, pageNumber])

    // React.useEffect(() => {
    //     const onScroll = (e: any) => {
    //         setScrollTop(e.target.documentElement.scrollTop)
    //         setScrolling(e.target.documentElement.scrollTop > scrollTop)
    //         if (scrollTop / pageNumber >= 500) {
    //             setPageNumber(pageNumber + 1)
    //         }
    //     }
    //     window.addEventListener("scroll", onScroll)
    //     return () => window.removeEventListener("scroll", onScroll)
    // }, [scrollTop, pageNumber])

    // React.useEffect(() => {
    //     if (props.searchStr) {
    //         setSearchStr(props.searchStr)
    //     } else {
    //         setSearchStr('')
    //     }
    // }, [props.searchStr])
