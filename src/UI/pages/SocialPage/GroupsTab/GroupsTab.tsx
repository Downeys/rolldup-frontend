import ActionButton from "../../../components/buttons/ActionButton/ActionButton"
import ContentCard from "../../../components/cards/ContentCard/ContentCard"
import UserGroupIcon from "../../../components/icons/UserGroupIcon"
import SmallCircleUserIcon from "../../../components/icons/SmallCircleUserIcon"
import UserIcon from "../../../components/icons/UserIcon"
import SearchBar from "../../../components/SearchBar/SearchBar"

export const GroupsTab = () => {
    const groupCardContent = {
        name: 'Group Name',
        description: '5 Members',
        icon: UserGroupIcon,
        contentIcons: [SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon]
    }

    const handleSeeAllClick = () => {
        console.log("feed me")
    }

    const handleSearch = (str: string) => {
        console.log(str)
    }

    return (
        <div className="h-screen">
            <div className="mt-4 mx-9">
                <SearchBar name='Search Groups' iconPosition="left" border onChange={handleSearch}/>
            </div>
            <ContentCard {...groupCardContent} onSeeAll={handleSeeAllClick} see='group'/>
            <div className="fixed w-full bottom-16 px-9 pb-2">
                <ActionButton appearance="primary" text="Create Group"/>
            </div>
        </div>
    )
}

export default GroupsTab