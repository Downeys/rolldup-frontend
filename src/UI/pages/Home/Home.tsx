import React from "react"
import BannerButton from "../../components/buttons/BannerButton/BannerButton"
import RatingStarIcon from "../../components/icons/RatingStarIcon"
import StrainFeed from "../../components/feeds/StrainFeed/StrainFeed"
import FeedApi from "../../../apis/FeedApi"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import Spinner from "../../components/Spinner/Spinner"
import HeartIcon from "../../components/icons/HeartIcon"
import CommentIcon from "../../components/icons/CommentIcon"
import ModalWrapper from "../../components/modals/ModalWrapper"
import ToastModal from "../../components/modals/ToastModal/ToastModal"
import FeedbackApi from "../../../apis/FeedbackApi"
import StrainLogApi from "../../../apis/StrainLogApi"
import ModalMessages from "../../../lib/constants/ModalMessages"
import { useNavWrapper } from "../../../utils/navigate-wrapper/useNavWrapper"
import { StrainLog } from "../../../lib/types"

export const Home = () => {
    const nav = useNavWrapper();
    const [init, setInit] = React.useState(false);
    const [modal, setModal] = React.useState({showModal: false, message: ''})
    const [strainLogs, setStrainLogs] = React.useState([] as StrainLog[])
    const height = React.useMemo(() => strainLogs.length > 1 ? 'h-full' : 'h-screen', [strainLogs]);
    const [scrollTop, setScrollTop] = React.useState(0);
    const [highestPage, setHighestPage] = React.useState(0);
    const pageNumber = React.useMemo(() => {
        const newPage = (Math.floor(1 + ((scrollTop / window.innerHeight)/8)))
        if (newPage > highestPage) setHighestPage(newPage)
        return newPage > highestPage ? newPage : highestPage;
    }, [scrollTop, init]);
    const [feedName, setFeedName] = React.useState('Newest');
    const feedquery = React.useCallback(() => {
        const queryConfig = {
            Newest: FeedApi.getAllStrainLogs,
            "Top Rated": FeedApi.getHighestRatedFeed,
            "Most Comments": FeedApi.getMostCommentedFeed,
            "Most Loved": FeedApi.getMostFavoritedFeed
        }
        return queryConfig[feedName]();
    }, [feedName])

    const onScroll = React.useCallback((e: any) => setScrollTop(e.target.documentElement.scrollTop), [])

    const getNextPage = React.useCallback(async () => {
        const logs = await feedquery();
        const aggregatedLogs = [...strainLogs, ...logs];
        setStrainLogs(aggregatedLogs);
    }, [strainLogs])

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
            setStrainLogs(strainLogs.filter(log => log.id !== logId))
            setModal({ showModal: true, message: ModalMessages.deletedPost });
        } catch(e) {
            console.log(e)
        }
    }, [strainLogs])

    const handleEditLog = React.useCallback(async (log: StrainLog) => {
        nav(`/edit-post?id=${log.id}`)
    }, [nav])

    React.useEffect(() => {
        if (init) {
            (async () => {
                const logs = await feedquery();
                setStrainLogs(logs);
            })()
        }
        setInit(true);
        window.addEventListener("scroll", onScroll)
        sessionStorage.removeItem("homeFeedCursor")
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    React.useEffect(() => {
        if (init && pageNumber > 1) getNextPage();
    }, [pageNumber, init])

    React.useEffect(() => {
        (async () => {
            const logs = await feedquery();
            setStrainLogs(logs);
        })()
    }, [feedName])

    const clearFeed = () => {
        sessionStorage.removeItem('homeFeedCursor')
        setHighestPage(1);
        setStrainLogs([]);
    }

    const handleFeedFilterClicks = (filterName: string) => {
        if (feedName !== filterName) {
            clearFeed()
            setFeedName(filterName)
        }
    }

    return (
        <div className={`w-full ${height} dark:bg-slate-800`}>
            <ModalWrapper showModal={modal.showModal} onCancel={() => {}} ><ToastModal message={modal.message} onClose={() => setModal({ showModal: false, message: '' })} /></ModalWrapper>
            <div className="w-full">
                <BannerButton icon={RatingStarIcon} text='Top Rated' clickHandler={() => handleFeedFilterClicks("Top Rated")} />
                <BannerButton icon={HeartIcon} text='Most Loved' clickHandler={() => handleFeedFilterClicks("Most Loved")} />
                <BannerButton icon={CommentIcon} text='Most Comments' clickHandler={() => handleFeedFilterClicks("Most Comments")}/>
            </div>
            <div className="py-4">
                <SectionHeader label={`Viewing ${feedName}`} />
            </div>
            {strainLogs.length > 0
                ? <StrainFeed strainLogs={strainLogs} onRemoveLog={handleRemoveLog} onEditLog={handleEditLog} onReportContent={handleReportContent} />
                : <div className='h-full w-full flex justify-center pt-14'><Spinner /></div>}
            <div className='h-48' />                
        </div>
    )
}

export default Home
