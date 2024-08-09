import { MouseEventHandler } from "react"
import RightChevronIcon from '../../icons/RightChevronIcon'
import Heading from "../../typography/Heading/Heading";

interface IBannerButtonProps {
    icon: any;
    text: string;
    clickHandler: MouseEventHandler;
}

export const BannerButton = (props: IBannerButtonProps) => {
    const Icon = props.icon
    return (
        <div className="mt-4 flex flex-row bg-white dark:bg-slate-800 h-14 w-full justify-between items-center" onClick={props.clickHandler}>
            <div className="flex items-center">
                <Icon selected={true} styling='h-9 w-9 ml-5'/>
                <Heading text={props.text} additionalStyles='ml-10'/>
            </div>
            <div className="mr-4">
                <RightChevronIcon />
            </div>
        </div>
    )
}

export default BannerButton

// border classes border-t border-b border-solid border-grey
