import React from "react";
import { labelsToIcons, levelsToDisplay } from "../../../components/BadgePreview/BadgePreview";
import BadgeIcon from "../../../components/icons/BadgeIcon"

export interface IBadgeCardProps {
    name: string;
    unlocked: boolean;
    level: string | undefined;
    onClick: (name: string) => void;
}

export const BadgeCard = (props: IBadgeCardProps) => {
    const icon = props.unlocked ? labelsToIcons[props.name] :<BadgeIcon selected={true} />
    const level = props.level ? levelsToDisplay[props.level] :null;
    return (
        <div onClick={() => props.onClick(props.name)}>
            <div className="h-32 flex flex-col items-center">
                {React.cloneElement(icon, {styling: 'h-14 w-14'})}
                <p className="font-primary dark:text-white font-semibold text-center leading-5">{props.name}</p>
                {level ? <p className="font-primary dark:text-white font-semibold text-center leading-5">{level}</p> : null}
            </div>
        </div>
    )
}

export default BadgeCard
