import React from "react";
import { Badge, BadgeRequirement } from "../../../../apis/BadgeApi";
import { labelsToIcons, levelsToDisplay } from "../../BadgePreview/BadgePreview";
import BadgeIcon from "../../icons/BadgeIcon"
import SubHeading from "../../typography/SubHeading/SubHeading"
import Text from "../../typography/Text/Text"

interface IBadgeModalProps {
    requirement: BadgeRequirement | undefined;
    userBadge: Badge | undefined;
}

const BadgeModal = (props:  IBadgeModalProps) => {
    const icon = props.userBadge ? labelsToIcons[props.userBadge.label] :<BadgeIcon selected={true} />
    const level = props.userBadge?.level;
    
    let instruction = '';

    if(level) {
        const nullSafeLevels = props.requirement?.levels || [];
        const achievedLevelIndex = nullSafeLevels.findIndex((it) => it.name === level);
        if(achievedLevelIndex >= 0 && nullSafeLevels.length > achievedLevelIndex + 1) {
            instruction = nullSafeLevels[achievedLevelIndex+1].instruction;
        }
    } else {
        instruction = props.requirement?.levels[0].instruction || '';
    }
    return (
        <div className="z-50 h-72 w-72 border border-transparent rounded-2xl bg-white flex flex-col justify-center items-center dark:bg-slate-800">
            {React.cloneElement(icon, {styling: 'h-32 w-32'})}
            <SubHeading text={props.requirement?.label || ''} additionalStyles='leading-8 text-2xl text-center' />
            <Text size='sm' semibold text={props.userBadge ? `Unlocked ${new Date(props.userBadge.awardedAt).toLocaleDateString()}` : 'Locked'} />
            {level ? <Text size='sm' semibold text={levelsToDisplay[level]} /> : null}
            <Text alignment="center" semibold text={instruction} />
        </div>
    )
}

export default BadgeModal
