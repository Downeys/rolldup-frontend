import { IIconProps } from "../shared-UI-Interfaces"

export const RemoveUserIcon = (props: IIconProps) => <svg className={props.styling || "h-6 w-6"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_794_5118)">
    <   path d="M23 12H20H17M15 7C15 8.06087 14.5786 9.07828 13.8284 9.82843C13.0783 10.5786 12.0609 11 11 11C9.93913 11 8.92172 10.5786 8.17157 9.82843C7.42143 9.07828 7 8.06087 7 7C7 5.93913 7.42143 4.92172 8.17157 4.17157C8.92172 3.42143 9.93913 3 11 3C12.0609 3 13.0783 3.42143 13.8284 4.17157C14.5786 4.92172 15 5.93913 15 7ZM5 20C5 18.4087 5.63214 16.8826 6.75736 15.7574C7.88258 14.6321 9.4087 14 11 14C12.5913 14 14.1174 14.6321 15.2426 15.7574C16.3679 16.8826 17 18.4087 17 20V21H5V20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
    <filter id="filter0_d_794_5118" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_794_5118"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_794_5118" result="shape"/>
    </filter>
    </defs>
</svg>


export default RemoveUserIcon