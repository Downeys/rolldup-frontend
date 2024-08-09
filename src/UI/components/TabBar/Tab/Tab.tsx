import SubHeading from "../../typography/SubHeading/SubHeading";

interface ITabProps {
    name: string;
    isSelected: boolean;
    onClick: (name: string) => void;
}

export const Tab = (props: ITabProps) => {
    const borderStyle = props.isSelected ? 'border-b-2 border-palm' : ''
    return (
        <div className={`h-12 w-full flex justify-center items-center ${borderStyle}`} onClick={() => props.onClick(props.name)}>
            <SubHeading text={props.name.toUpperCase()} />
        </div>
    )
}

export default Tab