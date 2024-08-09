import React from "react"
import { useNavWrapper } from "../../../utils/navigate-wrapper/useNavWrapper"
import FooterButton from '../../components/buttons/FooterButton/FooterButton'
import HomeIcon from '../../components/icons/HomeIcon'
import SearchIcon from "../../components/icons/SearchIcon"
import UserGroupIcon from "../../components/icons/UserGroupIcon"

interface IFooterProps {
    resetState: Function;
}

export const Footer = (props: IFooterProps) => {
    const nav = useNavWrapper();

    const handleClick = (tab: string) => {
        props.resetState()
        nav(`/${tab}`)
    }
    
    return (
        <div className={`z-30 fixed flex flex-col bottom-0 w-full`}>
            <div className="flex bg-white shadow-footerShadow">
                <FooterButton icon={HomeIcon} clickHandler={() => handleClick('home')} />
                <FooterButton icon={UserGroupIcon} clickHandler={() => handleClick('social')} />     
                <FooterButton icon={SearchIcon} clickHandler={() => handleClick('search')} /> 
            </div>   
        </div>
    )
}

export default Footer