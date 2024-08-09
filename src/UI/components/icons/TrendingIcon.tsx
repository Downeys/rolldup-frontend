import { IIconProps } from "../shared-UI-Interfaces"

export const TrendingIcon = (props: IIconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={props.styling || "h-9 w-9 ml-5"} viewBox="0 0 20 20" fill="currentColor">
    <path fill={props.selected ? "#355A20" : "none"} fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
</svg>

export default TrendingIcon