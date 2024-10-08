import { IIconProps } from "../shared-UI-Interfaces"

export const PlusCircleIcon = (props: IIconProps) => <svg className={props.styling || "h-7 w-7"} viewBox="0 0 28 30" fill={props.selected ? "#93CB56" : "none"} xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_734_2117)">
        <path d="M14 9V12V9ZM14 12V15V12ZM14 12H17H14ZM14 12H11H14ZM23 12C23 13.1819 22.7672 14.3522 22.3149 15.4442C21.8626 16.5361 21.1997 17.5282 20.364 18.364C19.5282 19.1997 18.5361 19.8626 17.4442 20.3149C16.3522 20.7672 15.1819 21 14 21C12.8181 21 11.6478 20.7672 10.5558 20.3149C9.46392 19.8626 8.47177 19.1997 7.63604 18.364C6.80031 17.5282 6.13738 16.5361 5.68508 15.4442C5.23279 14.3522 5 13.1819 5 12C5 9.61305 5.94821 7.32387 7.63604 5.63604C9.32387 3.94821 11.6131 3 14 3C16.3869 3 18.6761 3.94821 20.364 5.63604C22.0518 7.32387 23 9.61305 23 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
        <filter id="filter0_d_734_2117" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_2117"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_734_2117" result="shape"/>
        </filter>
    </defs>
</svg>

export default PlusCircleIcon