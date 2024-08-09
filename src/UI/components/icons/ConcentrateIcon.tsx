import { IIconProps } from "../shared-UI-Interfaces"

export const ConcentrateIcon = (props: IIconProps) => <svg className={props.styling || 'h-10 w-10'} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.2502 12.75C12.2019 13.6028 12.3842 16.1835 12.7502 17.25H23.2502C26.1767 12.9848 20.0882 8.36325 20.0882 10.1408C20.0882 11.9183 16.8107 11.6835 14.2502 12.75Z" stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.75 17.25H26.25V23.25H9.75V17.25Z" fill={props.selected ? '#93CB56' : 'none'} stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


export default ConcentrateIcon

// stroke="white" was stroke="currentColor"
// should be stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}
