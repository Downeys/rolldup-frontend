import { MouseEventHandler } from "react"

interface IFooterButtonProps {
    icon: any;
    clickHandler: MouseEventHandler;
}

export const FooterButton = (props: IFooterButtonProps) => {
    const Icon = props.icon
    return (
        <button className='w-full h-14 bg-transparent flex justify-center pt-2 pb-3' onClick={props.clickHandler}><Icon styling='h-9 w-9'/></button>
    )
}

export default FooterButton