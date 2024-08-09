import FlowerIcon from "../../icons/FlowerIcon";
import ConcentrateIcon from "../../icons/ConcentrateIcon"
import CartridgeIcon from "../../icons/CartridgeIcon"
import EdibleIcon from "../../icons/EdibleIcon"
import TopicalIcon from "../../icons/TopicalIcon"
import CBDIcon from "../../icons/CBDIcon"
import SubHeading from "../../typography/SubHeading/SubHeading";
import UserIcon from "../../icons/UserIcon"
import React from "react";
import { STRAIN_CATEGORIES } from "../../../constants";

interface ISearchResultProps {
    label: string;
    type: 'user' | 'Flower' | 'Concentrate' | 'Edible' | 'Topical' | 'Cartridge' | 'CBD';
    rBtnIcon?: any;
    lBtnIcon?: any;
    onClick?: (name: string) => void;
}
export const SearchResult = (props: ISearchResultProps) => {
    // const [showRButton, showLButton] = React.useMemo(() => [props.lBtnIcon !== undefined, props.rBtnIcon !== undefined], [])

    const options = [ ...STRAIN_CATEGORIES, { name: 'user', icon: (<span className="h-9 w-9 flex justify-center items-center border rounded-full border-dollar"><UserIcon /></span>)}]

    const iconOptions = {
        user: (() => <span className="h-9 w-9 flex justify-center items-center border rounded-full border-dollar"><UserIcon /></span>),
        flower: FlowerIcon,
        concentrate: ConcentrateIcon,
        cartridge: CartridgeIcon,
        edible: EdibleIcon,
        topical: TopicalIcon,
        cbd: CBDIcon
    }

    // const Icon = iconOptions[props.type?.toLowerCase()]
    const Icon: any = React.useMemo(() => options.filter(cat => cat.name.toLowerCase() === props.type?.toLowerCase()).map(c => c.icon)[0], [props.type?.toLowerCase()]);
    const RButton = props.rBtnIcon;
    const LButton = props.lBtnIcon;

    return (
        <div className="w-full h-14 px-4 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
                <Icon styling="h-9 w-9"/>
                <SubHeading text={props.label} additionalStyles='ml-5' />
            </div>
            {(RButton || LButton) && (<div className="flex">
                    {LButton && <span onClick={() => props.onClick && props.onClick(props.label)} className='mr-2'><LButton /></span>}
                    {RButton && <span onClick={() => props.onClick && props.onClick(props.label)} className='mr-2'><RButton /></span>}
                </div>) }
        </div>
    )
}

export default SearchResult