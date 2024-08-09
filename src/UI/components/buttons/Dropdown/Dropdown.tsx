import React from "react";
import DownChevronIcon from "../../icons/DownChevronIcon"
import UpChevronIcon from '../../icons/UpChevronIcon'
import SubHeading from "../../typography/SubHeading/SubHeading";
import Text from "../../typography/Text/Text"

interface IDropdownProps {
    title: string;
    selected?: string;
    menuItems: any[];
    hasFocus: boolean;
    takeFocus: (formItem: string) => void;
    onSelect: (selection: any) => void;
}

export const Dropdown = (props: IDropdownProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const [selection, setSelection] = React.useState(props.selected || '');
    const headerClass = React.useMemo(() => expanded ? " bg-grey w-full pl-4 pr-3 h-12 border border-grey rounded flex flex-row items-center justify-between" : "w-full pl-4 pr-3 h-12 border border-grey rounded flex flex-row items-center justify-between", [expanded])
    
    React.useEffect(() => {
        if (props.selected) setSelection(props.selected)
    }, [props.selected])

    React.useEffect(() => {
        setExpanded(props.hasFocus)
    }, [props.hasFocus])

    const handleClick = (name: string) => {
        setSelection(name)
        setExpanded(false)
        const dynamicReturnKey = props.title.toLowerCase();
        props.onSelect(name)
    }
    
    return (
        <div className="w-full dark:bg-slate-800">
            <div onClick={() => {
            setExpanded(!expanded)
            props.takeFocus('Category')
            }}
            className={headerClass}>
                <SubHeading text={selection || props.title} additionalStyles={expanded ? "dark:text-black" : ""}/>
                {expanded ? <UpChevronIcon styling="h-6 w-6 border" /> : <DownChevronIcon styling="h-6 w-6 border" />}
            </div>
            {(expanded && props.hasFocus) && <div className="border border-grey sticky z-10 bg-white dark:bg-slate-800">
                {props.menuItems.map(item => item.name !== selection && (<div key={`menuItem-${item.name}`} onClick={() => handleClick(item.name)}>
                    <Text text={item.name} size='lg' additionalStyles="w-full pl-4 py-1" />
                </div>))}
            </div>}
        </div>
    )
}