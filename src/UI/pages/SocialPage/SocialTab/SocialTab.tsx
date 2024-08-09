import LogoIcon from "../../../components/icons/LogoIcon"
import SmallCircleUserIcon from "../../../components/icons/SmallCircleUserIcon"
import BadgeIcon from "../../../components/icons/BadgeIcon"
import BadgeNoBGIcon from "../../../components/icons/BadgeNoBGIcon"
import CheckInIcon from "../../../components/icons/CheckInIcon"
import PlusCircleIcon from "../../../components/icons/PlusCircleIcon"
import BudPic from "../../../../assets/images/WorkingBuds.png"
import ContentCard from "../../../components/cards/ContentCard/ContentCard"
import RatingStarIcon from "../../../components/icons/RatingStarIcon"

interface ISocialTabProps {
    drilldowns: any[];
    onSeeAllClick: (pageIndex: number) => void;
}

export const SocialTab = (props: ISocialTabProps) => {
    return (
        <div>
            {props.drilldowns.length > 0 && props.drilldowns.map((drilldown, ix) => (<div className="border-t border-b border-grey"><ContentCard key={`${drilldown.name}-${ix}`} {...drilldown} onSeeAll={() => props.onSeeAllClick(ix)} /></div>))}
            <div className="h-32" />
        </div>
    )
}

export default SocialTab