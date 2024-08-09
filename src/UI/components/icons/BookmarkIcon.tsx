import { IIconProps } from "../shared-UI-Interfaces"

export const BookmarkIcon = (props: IIconProps) => <svg className={props.styling || "h-6 w-6"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21L12 17.5L5 21V5Z" fill={props.selected ? "#93CB56" : "none"} stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export default BookmarkIcon

// stroke="white" was stroke="currentColor"
// should be stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}
