import { IIconProps } from "../shared-UI-Interfaces"

export const TopicalIcon = (props: IIconProps) => <svg className={props.styling || 'h-6 w-6'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.99 5L17.62 6.37L18.99 7L17.62 7.63L16.99 9L16.36 7.63L14.99 7L16.36 6.37L16.99 5ZM11 6.13V4H13C13.57 4 14.1 4.17 14.55 4.45L15.98 3.02C15.126 2.36124 14.0785 2.0027 13 2H7.5V4H9V6.14C8.1357 6.32056 7.33452 6.72646 6.6777 7.31655C6.02088 7.90663 5.53178 8.65991 5.26 9.5H9.24L15 11.65V11.03C15.0002 9.87735 14.6022 8.76001 13.8733 7.8671C13.1444 6.97418 12.1294 6.36053 11 6.13ZM1 22H5V11H1V22ZM20 17H13L10.91 16.27L11.24 15.33L13 16H15.82C16.47 16 17 15.47 17 14.82C17 14.33 16.69 13.89 16.23 13.71L8.97 11H7V20.02L14 22L22 19C21.99 17.9 21.11 17 20 17ZM20 14C21.1 14 22 13.1 22 12C22 10.9 20 8 20 8C20 8 18 10.9 18 12C18 13.1 18.9 14 20 14Z" fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"} />
</svg>

export default TopicalIcon

// fill="white" was fill="currentColor"
// should be fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}
