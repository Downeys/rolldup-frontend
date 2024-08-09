import { IIconProps } from "../shared-UI-Interfaces"

export const UpChevronIcon = (props: IIconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={props.styling || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"} strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
</svg>

export default UpChevronIcon

// stroke="white" was stroke="currentColor"
// should be stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}
