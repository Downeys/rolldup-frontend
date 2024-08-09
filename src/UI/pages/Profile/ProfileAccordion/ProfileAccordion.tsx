import React from "react";
import { StrainLog } from "../../../../lib/types";
import { Accordion, AccordionItem } from "../../../components/accordions/Accordion/Accordion";
import StrainFeed from "../../../components/feeds/StrainFeed/StrainFeed";
import BookmarkIcon from "../../../components/icons/BookmarkIcon";
import HeartIcon from "../../../components/icons/HeartIcon";
import Text from "../../../components/typography/Text/Text";

interface IProfileAccordionProps {
    mostRecent: any[];
    favorites: any[];
    bookmarked: any[];
    topRated: any[];
    favCat: any[];
    reviews: any[];
    onClick: (expanded: boolean) => void;
    onEditLog: (log: StrainLog) => void;
    onRemoveLog: (logId: number) => void;
    onReportContent: (logId: number) => void;
}

export const ProfileAccordion = (props: IProfileAccordionProps) => {
    const [visibleTabs, totalTabs] = React.useMemo(() => {
        const tTabs = 5;
        let vTabs = [] as any[];
        if (props.bookmarked?.length > 0) vTabs.push({ name: 'Wishlist', expanded: false, strains: props.bookmarked, icon: BookmarkIcon });
        if (props.favorites?.length > 0) vTabs.push({ name: 'Favorites', expanded: false, strains: props.favorites, icon: HeartIcon });
        if (props.topRated?.length > 0) vTabs.push({ name: 'My Top Rated', expanded: false, strains: props.topRated });
        // if (props.topRated?.length > 0) vTabs.push({ name: 'My Latest Posts', expanded: false, strains: props.mostRecent });
        if (props.favCat?.length > 0) vTabs.push({ name: 'My Favorite Category', expanded: false, strains: props.favCat });
        if (props.reviews?.length > 0) vTabs.push({ name: 'My Reviews', expanded: false, strains: props.mostRecent });
        return [vTabs, tTabs]
    }, [props]);

    return (<div className="mt-2 border-t border-solid border-slate-400">
        <Accordion onItemClick={props.onClick}>
            {visibleTabs.map((tab, ix) => {
                const icon = tab.icon ? { icon: tab.icon } : {}
                return (<AccordionItem label={tab.name} { ...icon } index={''+ix} key={`${ix}-${tab.name}`}>
                    <StrainFeed strainLogs={tab.strains} onRemoveLog={props.onRemoveLog} onEditLog={props.onEditLog} onReportContent={props.onReportContent}/>
                </AccordionItem>) 
            })}
        </Accordion>
        {(visibleTabs.length < totalTabs) && <div className="flex justify-end">
            <Text size="sm" text="* interact with the app to unlock more tabs in your profile" additionalStyles="text-dollar mr-4"/>
        </div>}
    </div>)
}

export default ProfileAccordion