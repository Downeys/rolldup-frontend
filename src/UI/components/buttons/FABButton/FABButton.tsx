import Text from "../../typography/Text/Text"

interface IFABButtonProps {
    text: string;
    icon: any;
    onFabClick: Function;
}

export const FABButton = (props: IFABButtonProps) => {
    const Icon = props.icon

    return (
        <div className="bg-transparent flex flex-row justify-end items-center mr-8 mb-3 z-20" onClick={() => props.onFabClick(props.text)}>
            <Text bold size='lg' text={props.text} additionalStyles='dark:text-black' />
            <div className="h-9 w-9 rounded-full bg-darkGreen ml-4 flex justify-center items-center text-dollar"><Icon /></div>
        </div>
    )
}

export default FABButton