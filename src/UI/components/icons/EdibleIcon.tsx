import { IIconProps } from "../shared-UI-Interfaces"

export const EdibleIcon = (props: IIconProps) => <svg className={props.styling || 'h-6 w-6'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.4 5.40002C8.04 5.40002 7.8 5.76002 7.8 6.00002V9.00002H6.6V6.00002C6.6 5.64002 6.36 5.40002 6 5.40002C5.64 5.40002 5.4 5.76002 5.4 6.00002V9.00002H4.2V6.00002C4.2 5.64002 3.96 5.40002 3.6 5.40002C3.24 5.40002 3 5.76002 3 6.00002V9.96002C3 11.04 3.84 11.88 4.8 12V20.4C4.8 21.12 5.28 21.6 6 21.6C6.72 21.6 7.2 21.12 7.2 20.4V12C8.16 11.88 9 11.04 9 9.96002V6.00002C9 5.76002 8.76 5.40002 8.4 5.40002ZM10.8 6.00002V13.2H12V20.4C12 21.12 12.48 21.6 13.2 21.6C13.92 21.6 14.4 21.12 14.4 20.4V2.40002C12.36 2.40002 10.8 3.96002 10.8 6.00002ZM19.2 4.80002C17.52 4.80002 16.2 6.60002 16.2 8.76002C16.08 10.2 16.8 11.52 18 12.36V20.4C18 21.12 18.48 21.6 19.2 21.6C19.92 21.6 20.4 21.12 20.4 20.4V12.36C21.6 11.52 22.32 10.2 22.2 8.76002C22.2 6.60002 20.88 4.80002 19.2 4.80002Z" fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}/>
</svg>



export default EdibleIcon

// fill="white" was fill="currentColor"
// should be fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}
