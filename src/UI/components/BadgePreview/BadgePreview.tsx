import { Badge } from "../../../apis/BadgeApi";
import BadgeNoBGIcon from "../icons/BadgeNoBGIcon";
import { Balance } from "../icons/badges/Balance";
import { Cartridge } from "../icons/badges/Cartridge";
import { CBD } from "../icons/badges/CBD";
import { Concentrate } from "../icons/badges/Concentrate";
import { Edible } from "../icons/badges/Edible";
import { Flower } from "../icons/badges/Flower";
import { Greenhorn } from "../icons/badges/Greenhorn";
import { Indica } from "../icons/badges/Indica";
import { NewUser } from "../icons/badges/NewUser";
import PreRoll from "../icons/badges/PreRoll";
import { Sativa } from "../icons/badges/Sativa";
import { SeeingStars } from "../icons/badges/SeeingStars";
import { ShowLove } from "../icons/badges/ShowLove";
import { Topical } from "../icons/badges/Topical";
import Text from "../typography/Text/Text";

export interface BadgePreviewProps {
    badge: Badge;
};

export const labelsToIcons = {
    'Greenhorn': <Greenhorn />,
    "Hi, I'm new here": <NewUser />,
    'Indica': <Indica />,
    'Sativa': <Sativa />,
    'Show some Love': <ShowLove />,
    'Cartridge': <Cartridge />,
    'CBD': <CBD />,
    'Concentrate': <Concentrate />,
    'PreRoll': <PreRoll />,
    'Balance': <Balance />,
    'Edible': <Edible />,
    'Flower': <Flower />,
    'Seeing Stars': <SeeingStars />,
    'Topical': <Topical />,
};

export const levelsToDisplay = {
    'NOT_APPLICABLE': '',
    'ONE': 'Level 1',
    'TWO': 'Level 2',
    'THREE': 'Level 3',
};

export const BadgePreview = (props: BadgePreviewProps) => (
    <div className="flex flex-col items-center">
        {labelsToIcons[props.badge.label] ? <span className="text-white dark:text-slate-800">{labelsToIcons[props.badge.label]}</span> : <BadgeNoBGIcon />}
        <Text alignment="center" additionalStyles="w-[80px]" size="sm" semibold text={props.badge.label} />
        <Text alignment="center" size="sm" semibold text={levelsToDisplay[props.badge.level]} />
    </div>
);
