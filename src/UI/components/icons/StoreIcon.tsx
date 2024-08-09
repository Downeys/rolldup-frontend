import { IIconProps } from "../shared-UI-Interfaces"

export const StoreIcon: React.FC = ({ children }, props: IIconProps) => <svg className={props.styling || "h-6 w-6"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5 8.00998L21 3.50998C20.9479 3.35475 20.8463 3.22086 20.7109 3.12877C20.5754 3.03668 20.4136 2.99145 20.25 2.99998H3.75005C3.5865 2.99145 3.42465 3.03668 3.28922 3.12877C3.15379 3.22086 3.05223 3.35475 3.00005 3.50998L1.50005 8.00998C1.48924 8.08962 1.48924 8.17035 1.50005 8.24998V12.75C1.50005 12.9489 1.57906 13.1397 1.71972 13.2803C1.86037 13.421 2.05114 13.5 2.25005 13.5H3.00005V21H4.50005V13.5H9.00005V21H21V13.5H21.75C21.949 13.5 22.1397 13.421 22.2804 13.2803C22.421 13.1397 22.5 12.9489 22.5 12.75V8.24998C22.5109 8.17035 22.5109 8.08962 22.5 8.00998ZM19.5 19.5H10.5V13.5H19.5V19.5ZM21 12H18V8.99998H16.5V12H12.75V8.99998H12H11.25V12H7.50005V8.99998H6.00005V12H3.00005V8.36998L4.29005 4.49998H12H19.71L21 8.36998V12Z" fill="currentColor"/>
    <path d="M21 12H18V8.99998H16.5V12H12.75V8.99998H12H11.25V12H7.50005V8.99998H6.00005V12H3.00005V8.36998L4.29005 4.49998H12H19.71L21 8.36998V12Z" fill="#93CB56"/>
    <path d="M3.75 20.25H9.75" stroke="currentColor" strokeWidth="1.5"/>
</svg>


export default StoreIcon