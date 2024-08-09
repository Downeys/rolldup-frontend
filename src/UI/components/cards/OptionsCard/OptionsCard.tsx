import React from "react";
import { CARD_OPTIONS } from "../../../constants"
import SearchBar from "../../SearchBar/SearchBar"
import Option from "./Option/Option"

interface IOptionsCardProps {
    name: string;
    options: string[];
    takeFocus: (name: string) => void;
    onSelect: (selections: any) => void;
}

export const OptionsCard = (props: IOptionsCardProps) => {
    const [searchStr, setSearchStr] = React.useState('')
    const [allOptions, setAllOptions] = React.useState(props.options)
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([])
    const [filteredOptions, setFilteredOptions] = React.useState(props.options)

    const handleChange = (str: string) => {
        setSearchStr(str)
        const opts = allOptions.filter(op => op.toLowerCase().includes(str.toLowerCase()))
        setFilteredOptions(opts)
    }

    const handleClick = (name: string, isSelected: boolean) => {
        let newSelectedOptions;
        if(!isSelected) newSelectedOptions = ([...selectedOptions, name])
        else newSelectedOptions = selectedOptions.filter(opt => opt !== name)
        setSelectedOptions(newSelectedOptions)
        props.onSelect({ [props.name]: newSelectedOptions })
    }

    return (<div className="mt-4 h-28 border border-grey rounded flex flex-col" onClick={() => props.takeFocus(`${props.name}-Options`)}>
        <SearchBar name={props.name} iconPosition="right" onChange={handleChange}/>
        <div className="h-20 flex flex-row overflow-x-auto pb-3">
            {filteredOptions.map((opt, ix) => <Option name={opt} key={`${ix}-${opt}`} onClick={handleClick} selected={selectedOptions.includes(opt)}/>)}
        </div>
    </div>)
}

export default OptionsCard