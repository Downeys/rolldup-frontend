import React from "react"
import { IIconProps } from "../shared-UI-Interfaces"

export const TagIcon: React.FC = ({ children }, props: IIconProps) => <svg className={props.styling || "h-6 w-6"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7H7.01H7ZM7 3H12C12.512 3 13.024 3.195 13.414 3.586L20.414 10.586C20.7889 10.9611 20.9996 11.4697 20.9996 12C20.9996 12.5303 20.7889 13.0389 20.414 13.414L13.414 20.414C13.0389 20.7889 12.5303 20.9996 12 20.9996C11.4697 20.9996 10.9611 20.7889 10.586 20.414L3.586 13.414C3.4 13.2285 3.25249 13.0081 3.15192 12.7655C3.05136 12.5228 2.99973 12.2627 3 12V7C3 5.93913 3.42143 4.92172 4.17157 4.17157C4.92172 3.42143 5.93914 3 7 3Z" fill="#93CB56" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export default TagIcon