import React from "react"
import Text from "../../typography/Text/Text"

interface ToggleProps {
    disabled?: boolean;
    isOn: boolean;
    content: string[];
    onToggle: () => void;
}

export const ToggleWContent = (props: ToggleProps) => {
    const [isOn, setIsOn] = React.useState(props.isOn || false)

    const [outerDivStyles, innerStyles] = React.useMemo(() => {
        const outerBackground = isOn ? 'bg-dollar' : 'bg-grey'
        const innerBackground = isOn ? 'bg-texasGreen' : 'bg-black'
        return [`h-14 w-7 py-2 rounded-full flex flex-col justify-between items-center ${outerBackground}`, `h-5 w-5 rounded-full ${innerBackground}`]
    }, [isOn])

    const handleClick = () => {
        if (!props.disabled) setIsOn(!isOn)
        props.onToggle()
    }

    return (
        <div className={outerDivStyles} onClick={handleClick}>
            {!isOn && <Text text={props.content[1]} size="sm" semibold additionalStyles="dark:text-black" />}
            <div className={innerStyles} />
            {isOn && <Text text={props.content[0]} size="sm" semibold additionalStyles="dark:text-black" />}
        </div>
    )
}

export default ToggleWContent