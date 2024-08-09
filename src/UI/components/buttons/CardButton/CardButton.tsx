import { MouseEventHandler } from "react"

interface ICardButtonProps {
    icon: any;
    clickHandler: MouseEventHandler;
    styling?: string;
    selected?: boolean;
}

export const CardButton = (props: ICardButtonProps) => {
    const Icon = props.icon
    return (
        <button className={props.styling || 'mr-4'} onClick={props.clickHandler}><Icon selected={props.selected} /></button>
    )
}

export default CardButton