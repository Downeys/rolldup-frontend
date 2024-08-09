import React from "react";
import { MouseEventHandler } from "react";
import Text from "../../typography/Text/Text";

interface IActionButtonProps {
    appearance: 'primary' | 'secondary' | 'tertiary',
    text: string;
    disabled?: boolean;
    additionalStyles?: string;
    onClick?: MouseEventHandler;
    type?: 'submit' | 'button'
}

export const ActionButton = (props: IActionButtonProps) => {
    const classList = {
        base: 'p-2 leading-5 font-bold text-lg font-primary border rounded w-full mx-2',
        primary: 'bg-palm text-white border-white',
        secondary: 'bg-transparent border-black dark:border-white',
        tertiary: 'bg transparent border-black dark:border-white text-palm'
    }

    return <button
    className={`${classList.base} ${classList[props.appearance]} ${props.additionalStyles}`}
    type={props.type || 'button'}
    onClick={props.onClick}
    disabled={props.disabled}
    >
        <Text text={props.text} additionalStyles="sm:text-md" />
    </button>
}

export default ActionButton