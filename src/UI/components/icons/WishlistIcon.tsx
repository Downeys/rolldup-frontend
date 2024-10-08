import { IIconProps } from "../shared-UI-Interfaces"

export const WishlistIcon = (props: IIconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={props.styling || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path fill={props.selected ? "#93CB56" : "none"} strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>

export default WishlistIcon
