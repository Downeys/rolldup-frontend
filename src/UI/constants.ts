import CartridgeIcon from "./components/icons/CartridgeIcon";
import ConcentrateIcon from "./components/icons/ConcentrateIcon";
import EdibleIcon from "./components/icons/EdibleIcon";
import FlowerIcon from "./components/icons/FlowerIcon";
import TopicalIcon from "./components/icons/TopicalIcon";
import PreRollIcon from "./components/icons/PreRollIcon";

export const STRAIN_CATEGORIES = [
    {name: 'PreRoll', icon: PreRollIcon},
    {name: 'Concentrate', icon: ConcentrateIcon},
    {name: 'Topical', icon: TopicalIcon},
    {name: 'Cartridge', icon: CartridgeIcon},
    {name: 'Edible', icon: EdibleIcon},
    {name: 'Flower', icon: FlowerIcon},
]

export const CARD_OPTIONS = [
    { name: 'Effects', options: ['Sleep', 'Active', 'Pain Relief', 'Appetite Boost', 'Happy', 'Paranoid'] },
    { name: 'Flavor', options: ['Earthy', 'Lemon', 'Piney', 'Grape', 'Soapy', 'Skunky', 'Strawberry', 'Bright'] },
    { name: 'Odor', options: ['Skunky', 'Fruity', 'Piney', 'Diesel'] }
]

export const STRAIN_LEVELS = ['Indica', 'Indica-Hybrid', 'Hybrid', 'Sativa-Hybrid', 'Sativa']
