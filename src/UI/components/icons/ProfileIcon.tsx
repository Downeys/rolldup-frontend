import { IIconProps } from "../shared-UI-Interfaces"

export const ProfileIcon = (props: IIconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={props.styling || "h-8 w-8 mr-5 ml-8"} viewBox="0 0 20 20" fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}>
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
</svg>

export default ProfileIcon

// fill="white" was fill="currentColor"
// should be fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}
