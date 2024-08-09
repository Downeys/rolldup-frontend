import { IIconProps } from "../shared-UI-Interfaces"

export const PlusIcon = (props: IIconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={props.styling || "h-7 w-7"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
</svg>

export default PlusIcon