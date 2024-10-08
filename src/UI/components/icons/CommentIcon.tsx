import { IIconProps } from "../shared-UI-Interfaces"

export const CommentIcon = (props: IIconProps) => <svg className={props.styling || 'h-6 w-6'} viewBox="0 0 24 24" fill={props.selected ? "#93CB56" : "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z" stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


export default CommentIcon

// stroke="white" was stroke="currentColor"
// should be stroke={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}
