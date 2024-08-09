import UserProfileCard from '../../components/cards/UserProfileCard/UserProfileCard'
import UserStatCard from '../../components/cards/UserStatCard/UserStatCard'
import ProfileAccordion from './ProfileAccordion/ProfileAccordion'
import { UserAccountInfo } from '../../../utils/providers/AccountProvider'
import React from 'react'
import FeedApi from '../../../apis/FeedApi'
import { updateProfilePic } from '../../../apis/SettingsApi'
import { useNavWrapper } from '../../../utils/navigate-wrapper/useNavWrapper'
import FeedbackApi from '../../../apis/FeedbackApi'
import ModalMessages from '../../../lib/constants/ModalMessages'
import StrainLogApi from '../../../apis/StrainLogApi'
import ModalWrapper from '../../components/modals/ModalWrapper'
import ToastModal from '../../components/modals/ToastModal/ToastModal'
import BadgeNoBGIcon from '../../components/icons/BadgeNoBGIcon'
import ContentCard from '../../components/cards/ContentCard/ContentCard'
import { getAllBadgesForUser } from '../../../apis/BadgeApi'
import { BadgePreview } from '../../components/BadgePreview/BadgePreview'
import { StrainLog } from '../../../lib/types'

const getUserStats = (logs) => {
    const strains = new Set(logs.personalLogs?.map(log => log.strain.name)).size
    const reviews = logs.personalLogs?.filter(log => !!log.review).length
    const favorites = logs.favoriteLogs?.filter(log => log.isFavorite).length
    return { strains, reviews, favorites }
}

const getFavoriteCategoryLogs = (personalLogs) => {
    const catSet= new Set<string>(personalLogs?.map(log => log.strain.category))
    let catsLogged: any = { start: 0};
    catSet.forEach((cat) => {
        if (catsLogged[Object.keys(catsLogged)[0]] < personalLogs.filter(log => log.strain.category === cat).length) catsLogged = { [cat]: personalLogs.filter(log => log.strain.category === cat).length };
    })
    return personalLogs.filter(log => log.strain.category === Object.keys(catsLogged)[0]);
}

export const Profile = () => {
    const acctContext = React.useContext(UserAccountInfo)
    const nav = useNavWrapper();
    const ref = React.useRef<HTMLInputElement>(null);
    const userProfile = React.useMemo(() => ({ ...acctContext.user }), [acctContext.user])
    const [modal, setModal] = React.useState({showModal: false, message: ''})
    const [profileLogs, setProfileLogs] = React.useState({} as any)
    const [init, setInit] = React.useState(false);
    const userStats = React.useMemo(() => getUserStats(profileLogs), [profileLogs])
    const filteredLogs = React.useMemo(() => {
        let topRated: any[] = [];
        let favCat: any[] = [];
        let reviews: any[] = [];
        if (profileLogs.personalLogs) {
            topRated = [...profileLogs.personalLogs.filter(log => log.rating === 5), ...profileLogs.personalLogs.filter(log => log.rating === 4)]
            favCat = getFavoriteCategoryLogs(profileLogs.personalLogs)
            reviews = profileLogs.personalLogs.filter(log => !!log.review)
        }
        return { topRated, favCat, reviews }
    }, [profileLogs.personalLogs])
    const [accordianExpanded, setAccordianExpanded] = React.useState(false);
    const height = React.useMemo(() => accordianExpanded ? 'h-full' : 'h-screen', [accordianExpanded]);
    const updateAllFeeds = React.useCallback((logId: number) => {
        let updateLogs = profileLogs;
        Object.keys(profileLogs).forEach((feedName) => {
            updateLogs[feedName] = updateLogs[feedName].filter(log => log.id !== logId)
        })
        setProfileLogs(updateLogs)
    }, [profileLogs, setProfileLogs])

    const handleEditLog = React.useCallback(async (log: StrainLog) => {
        nav(`/edit-post?id=${log.id}`)
    }, [nav])

    const handleReportContent = React.useCallback(async (logId: number) => {
        try {
            await FeedbackApi.reportContent(logId, 'post')
            setModal({showModal: true, message: ModalMessages.reportedContent });
        } catch(e) {
            console.log(e)
        }
    }, [setModal])

    const handleRemoveLog = React.useCallback(async (logId: number) => {
        try {
            await StrainLogApi.removeStrainLog(logId)
            updateAllFeeds(logId);
            setModal({ showModal: true, message: ModalMessages.deletedPost });
        } catch(e) {
            console.log(e)
        }
    }, [setModal, updateAllFeeds])

    const getUserBadges = React.useCallback(async () => {
        const badges = await getAllBadgesForUser();
        const numberOfPreviews = window.innerWidth >= 360 ? 4 : 3;
        const previews = badges.slice(0, numberOfPreviews).map(badge => () => <BadgePreview badge={badge}/>)
        setBadgeCardContent({
            name: 'Badges',
            description: badges.length === 1 ? '1 badge unlocked' : `${badges.length} badges unlocked`,
            icon: BadgeNoBGIcon,
            contentIcons: previews,
            show: badges.length > 0,
        })
    }, [])

    const [badgeCardContent, setBadgeCardContent] = React.useState({
        name: 'Badges',
        description: 'Loading badges...',
        icon: BadgeNoBGIcon,
        contentIcons: null as any,
        show: false,
    });
    
    React.useEffect(() => {
        if(badgeCardContent.contentIcons === null) getUserBadges();
    }, []);

    // const [wishlistCardContent, setWishlistCardContent] = React.useState({
    //     name: 'Wishlist',
    //     description: '20 Strains',
    //     icon: WishlistIcon,
    //     contentImages: [BudPic, BudPic, BudPic, BudPic, BudPic]
    // })

    React.useEffect(() => {
        (async () => {
            const logs = await FeedApi.getPersonalLogs();
            setProfileLogs(logs);
            setInit(true)
        })()
    }, [])

    // const favoritesCardContent = {
    //     name: 'Favorites',
    //     description: 'All your favorites right here',
    //     icon: HeartIcon,
    //     contentImages: [BudPic, BudPic, BudPic, BudPic, BudPic]
    // }

    const setImageFile = async () => {
        if (ref.current?.files) {
            const file = ref.current.files[0];
            let formData = new FormData();
            formData.append("file", file);
            formData.append("username", acctContext.user.username);
            await updateProfilePic(formData);
            acctContext.refreshUser(acctContext.user.username);
        }
    }

    // when user clicks "See all" on a content card, this navigates the user to the associated page
    // const handleSeeAllClick = (name: string) => {
    //     const path = 'profile/' + name.toLowerCase()
    //     nav(name.toLowerCase())
    // }

    const handleEditProfilePic = () => {
        ref.current && ref.current?.click();
    }

    const handleAccordianClick = (expanded: boolean) => {
        setAccordianExpanded(expanded)
    }

    return (
        <div className={`flex flex-col dark:bg-slate-800 ${height}`}>
            <ModalWrapper showModal={modal.showModal} onCancel={() => {}} ><ToastModal message={modal.message} onClose={() => setModal({ showModal: false, message: '' })} /></ModalWrapper>
            <input ref={ref} onChange={setImageFile} type='file' hidden />
            <UserProfileCard
                username={userProfile.username}
                profilePic={userProfile.profilePic}
                rank={userProfile.rank}
                joinDate={ new Date(userProfile.joinDate)}
                tokes={profileLogs.personalLogs?.length}
                onEdit={handleEditProfilePic}
            />
            <UserStatCard strains={userStats.strains} reviews={userStats.reviews} favorites={userStats.favorites} />
            {badgeCardContent.show && <div className='my-4'>
                 <ContentCard key='badgeCard' {...badgeCardContent} onSeeAll={() => nav('/profile/badges')} />
            </div>}
            {init && <ProfileAccordion
                        onClick={handleAccordianClick}
                        mostRecent={profileLogs.personalLogs}
                        favorites={profileLogs.favoriteLogs}
                        bookmarked={profileLogs.bookmarkedLogs}
                        topRated={filteredLogs.topRated}
                        favCat={filteredLogs.favCat}
                        reviews={filteredLogs.reviews}
                        onEditLog={handleEditLog}
                        onRemoveLog={handleRemoveLog}
                        onReportContent={handleReportContent}
                        />}
            <div className='h-48' />                
        </div>
    )

    // return (
    //     <div className="flex flex-col h-screen">
    //         <input ref={ref} onChange={setImageFile} type='file' hidden />
    //         <UserProfileCard
    //             username={userProfile.username}
    //             profilePic={userProfile.profilePic}
    //             rank={userProfile.rank}
    //             joinDate={ new Date(userProfile.joinDate)}
    //             tokes={profileLogs.personalLogs?.length}
    //             onEdit={handleEditProfilePic}
    //         />
    //         <UserStatCard strains={userStats.strains} reviews={userStats.reviews} favorites={userStats.favorites} />
    //         <ProfileAccordion mostRecent={profileLogs.personalLogs} favorites={profileLogs.favoriteLogs} topRated={filteredLogs.topRated} favCat={filteredLogs.favCat} reviews={filteredLogs.reviews} />
    //         <div className='h-48' />                
    //     </div>
    // )
}

export default Profile

{/* <div className='mt-4'>
                <ContentCard key='wishlistCard' {...wishlistCardContent} onSeeAll={handleSeeAllClick} />
            </div> */}
