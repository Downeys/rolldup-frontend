import TabBar from "../../components/TabBar/TabBar"
import React from "react"
import SocialDrillDown from "./SocialDrillDown/SocialDrillDown"
import { drillDownPages } from "./SocialContent"
import SocialTab from "./SocialTab/SocialTab"
import FriendsTab from "./FriendsTab/FriendsTab"
import GroupsTab from "./GroupsTab/GroupsTab"
import Heading from "../../components/typography/Heading/Heading"

export const SocialPage = () => {
    const [showDrillDown, setShowDrillDown] = React.useState(false)
    const [currentDrillDown, setCurrentDrillDown] = React.useState({} as any)

    const summonDrillDown = (pageIndex: number) => {
        setCurrentDrillDown(drillDownPages[pageIndex])
        setShowDrillDown(true);
        window.scrollTo(0,0);
    }

    const banishDrillDown = () => {
        setShowDrillDown(false);
    }

    const socialTabs = [
        { name: 'social', content: () => (<SocialTab drilldowns={drillDownPages} onSeeAllClick={summonDrillDown} />)},
        { name: 'friends', content: () => <FriendsTab />},
        { name: 'groups', content: () => <GroupsTab />},
    ]

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Heading text="Content coming soon." />
        </div>
    )
}

export default SocialPage