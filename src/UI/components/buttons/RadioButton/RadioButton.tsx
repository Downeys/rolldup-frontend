import { ChangeEventHandler } from "react";
import Text from "../../typography/Text/Text";

interface IRadioButtonProps {
    label: string;
    isSelected?: boolean;
    disabled?: boolean;
    group: string;
    onChange: ChangeEventHandler
}

export const RadioButton = (props: IRadioButtonProps) => {
    return (
        <div className="flex flex-row items-center">
            <input className='focus:ring-black text-dollar border-black border-2 h-5 w-5'
                disabled={props.disabled}
                type="radio"
                id={props.label}
                name={props.group}
                onChange={props.onChange}
                checked={props.isSelected} />
            <Text text={props.label} additionalStyles='ml-4' />
        </div>
    )
}

export default RadioButton