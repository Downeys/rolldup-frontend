import React from "react"
import { useLocation } from "react-router-dom";
import FeedApi from "../../../apis/FeedApi";
import FeedbackApi from "../../../apis/FeedbackApi";
import StrainLogApi from "../../../apis/StrainLogApi";
import ModalMessages from "../../../lib/constants/ModalMessages";
import { StrainLog } from "../../../lib/types";
import { useNavWrapper } from "../../../utils/navigate-wrapper/useNavWrapper";
import { StrainFeed } from "../../components/feeds/StrainFeed/StrainFeed";
import ModalWrapper from "../../components/modals/ModalWrapper";
import ToastModal from "../../components/modals/ToastModal/ToastModal";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import Text from "../../components/typography/Text/Text";

export const Search = () => {
    const location = useLocation();
    const nav = useNavWrapper();
    const searchStr = React.useMemo(() => location.search.split("=")[1], [location.search])
    const [searching, setSearching] = React.useState(true);
    const [modal, setModal] = React.useState({showModal: false, message: ''})
    const [results, setResults] = React.useState([] as any[]);
    const height = React.useMemo(() => results.length > 1 ? 'h-full' : 'h-screen', [results]);
    const searchStrainLogs = React.useCallback(async (searchStr: string) => {
        setSearching(true);
        setResults(await FeedApi.getLogsByStrainName(searchStr));
        setSearching(false)
    }, [])
    const handleReportContent = React.useCallback(async (logId: number) => {
        try {
            await FeedbackApi.reportContent(logId, 'post')
            setModal({showModal: true, message: ModalMessages.reportedContent });
        } catch(e) {
            console.log(e)
        }
    }, [setModal])

    const handleEditLog = React.useCallback(async (log: StrainLog) => {
        nav(`/edit-post?id=${log.id}`)
    }, [nav])
    
    const handleRemoveLog = React.useCallback(async (logId: number) => {
        try {
            await StrainLogApi.removeStrainLog(logId)
            setResults(results.filter(log => log.id !== logId))
            setModal({ showModal: true, message: ModalMessages.deletedPost });
        } catch(e) {
            console.log(e)
        }
    }, [setModal, results])

    React.useEffect(() => {
        searchStrainLogs(searchStr);
    }, [searchStr]);

    return (
        <div className={`w-full dark:bg-slate-800 ${height}`}>
            <ModalWrapper showModal={modal.showModal} onCancel={() => {}} ><ToastModal message={modal.message} onClose={() => setModal({ showModal: false, message: '' })} /></ModalWrapper>
            <div className="py-4">
                <SectionHeader label='Search Results' />
                {results.length === 0 && !searching
                ? <div className='h-full w-full flex justify-center pt-14'><Text text='No search results found' /></div>
                : <StrainFeed strainLogs={results} onRemoveLog={handleRemoveLog} onEditLog={handleEditLog} onReportContent={handleReportContent}/>}
            </div>
            <div className="h-16" />
        </div>
    )
}

export default Search