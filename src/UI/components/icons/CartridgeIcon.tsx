import { IIconProps } from "../shared-UI-Interfaces"

export const CartridgeIcon = (props: IIconProps) => <svg className={props.styling || 'h-6 w-6'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.62 1.5C18.11 1.5 17.6 1.69 17.21 2.09L10.75 8.55L14.95 12.74L21.41 6.29C22.2 5.5 22.2 4.24 21.41 3.46L20.04 2.09C19.65 1.69 19.14 1.5 18.62 1.5ZM9.80004 9.5L3.23004 16.07L3.93004 16.77C3.40004 17.24 2.89004 17.78 2.38004 18.29C1.60004 19.08 1.60004 20.34 2.38004 21.12C3.16004 21.9 4.42004 21.9 5.21004 21.12C5.72004 20.63 6.25004 20.08 6.73004 19.58L7.43004 20.27L14 13.7" fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"} />
</svg>


export default CartridgeIcon

// fill="white" was fill="currentColor"
// should be fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "currentColor"}
