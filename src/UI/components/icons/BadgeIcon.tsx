import { IIconProps } from "../shared-UI-Interfaces"

export const BadgeIcon = (props: IIconProps) => <svg className={props.styling || "h-6 w-6"} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4C0 1.79086 1.79086 0 4 0H52C54.2091 0 56 1.79086 56 4V52C56 54.2091 54.2091 56 52 56H4C1.79086 56 0 54.2091 0 52V4Z" fill="#059033"/>
    <path d="M21 28L25.6667 32.6667L35 23.3333L21 28ZM48.1087 13.9627C40.7309 14.3545 33.4991 11.8034 28 6.86934C22.501 11.8034 15.2691 14.3545 7.89134 13.9627C7.29759 16.2613 6.99808 18.626 7.00001 21C7.00001 34.0457 15.9227 45.01 28 48.118C40.0773 45.01 49 34.048 49 21C49 18.5687 48.6897 16.212 48.1087 13.9627Z" fill="#93CB56" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


export default BadgeIcon
