import FeedApi from "../../../apis/FeedApi"
import BadgeIcon from "../../components/icons/BadgeIcon"
import BadgeNoBGIcon from "../../components/icons/BadgeNoBGIcon"
import CheckInIcon from "../../components/icons/CheckInIcon"
import LogoIcon from "../../components/icons/LogoIcon"
import PlusCircleIcon from "../../components/icons/PlusCircleIcon"
import RatingStarIcon from "../../components/icons/RatingStarIcon"
import SmallCircleUserIcon from "../../components/icons/SmallCircleUserIcon"
import BudPic from "../../../assets/images/WorkingBuds.png"

export const drillDownPages = [
    {
        name: 'Highest Ranking',
        icon: LogoIcon,
        contentIcons: [SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon],
        query: FeedApi.getAllStrainLogs
    },
    {
        name: 'Most Badges',
        icon: BadgeNoBGIcon,
        contentIcons: [SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon],
        query: FeedApi.getAllStrainLogs
    },
    {
        name: 'Check Ins Nearby',
        icon: CheckInIcon,
        contentImages: [BudPic, BudPic, BudPic, BudPic, BudPic],
        query: FeedApi.getAllStrainLogs
    },
    {
        name: 'Limited Time Badges',
        icon: BadgeNoBGIcon,
        contentIcons: [BadgeIcon, BadgeIcon, BadgeIcon, BadgeIcon, BadgeIcon],
        query: FeedApi.getAllStrainLogs
    },
    {
        name: 'Most Reviews',
        icon: RatingStarIcon,
        contentIcons: [SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon],
        query: FeedApi.getAllStrainLogs
    },
    {
        name: 'Most Logged Categories',
        icon: PlusCircleIcon,
        contentIcons: [SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon, SmallCircleUserIcon],
        query: FeedApi.getAllStrainLogs
    }
]