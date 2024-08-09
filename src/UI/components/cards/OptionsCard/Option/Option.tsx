import React from "react"
import PlusCircleIcon from "../../../icons/PlusCircleIcon"
import Text from "../../../typography/Text/Text";

interface IOptionProps {
    name: string
    selected?: boolean;
    onClick: (name: string, isSelected: boolean) => void;
}

export const Option = (props: IOptionProps) => {
    const [isSelected, setIsSelected] = React.useState(props.selected || false)

    const handleClick = () => {
        props.onClick(props.name, isSelected)
        setIsSelected(!isSelected)
    }

    return (
        <div className="h-9 py-2 pl-2 pr-3 border border-grey rounded flex flex-row justify-center mx-4 flex-shrink-0" onClick={handleClick}>
            <PlusCircleIcon selected={props.selected || isSelected}/>
            <Text semibold text={props.name} />
        </div>
    )
}

export default Option