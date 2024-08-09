import React from "react"
import BadgeIcon from "../../components/icons/BadgeIcon"
import BadgeModal from "../../components/modals/BadgeModal/BadgeModal"
import ModalWrapper from "../../components/modals/ModalWrapper"
import Text from "../../components/typography/Text/Text"
import BadgeCard from "./BadgeCard/BadgeCard"
import { Badge, BadgeRequirement, getAllBadgeRequirements, getAllBadgesForUser } from "../../../apis/BadgeApi"

interface ModalState {
    showModal: boolean;
    requirement: BadgeRequirement | undefined;
    userBadge: Badge | undefined;
}

export const BadgesPage = () => {
    const [modal, setModal] = React.useState<ModalState>({
        showModal: false,
        requirement: undefined,
        userBadge: undefined,
    })
    const [badgeRequirements, setBadgeRequirements] = React.useState([] as Array<BadgeRequirement>);
    const [userBadges, setUserBadges] = React.useState([] as Array<Badge>);

    React.useEffect(() => {
        (async () => {
            const requirements = await getAllBadgeRequirements();
            setBadgeRequirements(requirements);
        })()
    }, []);

    React.useEffect(() => {
        (async () => {
            const badges = await getAllBadgesForUser();
            setUserBadges(badges);
        })()
    }, []);

    const handleBadgeClick = (name: string) => {
        const requirement = badgeRequirements.find(badge => badge.label === name)
        const userBadge = userBadges.find(badge => badge.label === name)
        setModal({ showModal: !modal.showModal, requirement, userBadge })
    }

    const unlocked = React.useCallback((label) =>
        !!userBadges.find((badge) => badge.label === label), [userBadges])

    const level = React.useCallback((label) =>
        userBadges.find((badge) => badge.label === label)?.level, [userBadges])

    return (
        <div className="h-full dark:bg-slate-800 dark:text-slate-800">
            <div className="flex flex-row p-4">
                <BadgeIcon styling="h-12 w-12" selected={true} />
                <div className="flex flex-col ml-2">
                    <Text bold text="Badges" />
                    <Text text={`${userBadges.length} Unlocked`} />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4">
                {badgeRequirements.map(badge => (
                    <BadgeCard unlocked={unlocked(badge.label)} key={badge.label} name={badge.label} level={level(badge.label)} onClick={handleBadgeClick} />
                ))}
            </div>
            <ModalWrapper showModal={modal.showModal} onCancel={() => handleBadgeClick('')} >
                <BadgeModal requirement={modal.requirement} userBadge={modal.userBadge} />
            </ModalWrapper>
        </div>
    )
}

export default BadgesPage
