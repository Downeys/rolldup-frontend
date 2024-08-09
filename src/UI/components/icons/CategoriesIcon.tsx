import { IIconProps } from "../shared-UI-Interfaces"

export const CategoriesIcon = (props: IIconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={props.styling || "h-9 w-9 ml-5"} fill="none" viewBox="0 0 24 24" stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"} strokeWidth={2}>
    <path fill={props.selected ? "#93CB56" : "none"} strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
</svg>

export default CategoriesIcon

// stroke="white" was stroke="currentColor"
// should be stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}
