import { IIconProps } from "../shared-UI-Interfaces"

export const AddUserIcon = (props: IIconProps) => <svg className={props.styling || "h-6 w-6"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 9V12M18 12V15M18 12H21M18 12H15M13 7C13 8.06087 12.5786 9.07828 11.8284 9.82843C11.0783 10.5786 10.0609 11 9 11C7.93913 11 6.92172 10.5786 6.17157 9.82843C5.42143 9.07828 5 8.06087 5 7C5 5.93913 5.42143 4.92172 6.17157 4.17157C6.92172 3.42143 7.93913 3 9 3C10.0609 3 11.0783 3.42143 11.8284 4.17157C12.5786 4.92172 13 5.93913 13 7ZM3 20C3 18.4087 3.63214 16.8826 4.75736 15.7574C5.88258 14.6321 7.4087 14 9 14C10.5913 14 12.1174 14.6321 13.2426 15.7574C14.3679 16.8826 15 18.4087 15 20V21H3V20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export default AddUserIcon