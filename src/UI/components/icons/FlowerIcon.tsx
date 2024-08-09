import { IIconProps } from "../shared-UI-Interfaces"

export const FlowerIcon = (props: IIconProps) => <svg className={props.styling || 'h-6 w-6'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12C21 12 12.5 14 12.5 22C12.5 22 21 22 21 12ZM3 12C3 22 11.5 22 11.5 22C11.5 14 3 12 3 12ZM12 17.5C12 17.5 13 15.34 15 13.5C14.76 9.84 12 8 12 8C12 8 9.24 9.84 9 13.5C11 15.34 12 17.5 12 17.5ZM20.75 10.75C20.75 10.75 20 7 18 5C18 5 15.53 6.64 14.33 9.19C15.05 10.42 15.5 11.88 15.75 12.87C17.13 11.82 18.75 11 20.75 10.75ZM15.5 5.75C14.5 3.75 12 2.25 12 2.25C12 2.25 9.5 3.75 8.5 5.75C8.5 5.75 9.59 6.66 10.35 8.2C10.82 7.65 11.36 7.21 12 7C12.64 7.21 13.18 7.65 13.65 8.2C14.41 6.66 15.5 5.75 15.5 5.75ZM3.25 10.75C5.25 11 6.87 11.82 8.25 12.87C8.5 11.88 8.95 10.42 9.67 9.19C8.47 6.64 6 5 6 5C4 7 3.25 10.75 3.25 10.75Z" fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}/>
</svg>

export default FlowerIcon

// fill="white" was fill="currentColor"
// should be fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}
