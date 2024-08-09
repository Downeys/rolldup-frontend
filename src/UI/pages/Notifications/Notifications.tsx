import React from "react"
import NotiApi from "../../../apis/NotificationApi";
import { useNavWrapper } from "../../../utils/navigate-wrapper/useNavWrapper";
import { UserNotifications } from "../../../utils/providers/NotificationProvider";
import AlertIcon from "../../components/icons/AlertIcon"
import LeftChevronIcon from "../../components/icons/LeftChevronIcon";
import Text from '../../components/typography/Text/Text'
import Noti from "./Noti/Noti";

interface INoti {
    type: string;
    message: string;
    engager: string;
    logId?: number;
    isRead: boolean;
    timestamp: string;
}

export const Notifications = () => {
    const notiContext = React.useContext(UserNotifications);
    const unreadNotis = React.useMemo(() => notiContext.notiCount, [notiContext.notiCount])
    const [init, setInit] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [lastPageSize, setLastPageSize] = React.useState(0)
    const [notis, setNotis] = React.useState([] as INoti[])
    const nextPageButtonText = React.useMemo(() => {
        const loadMoreText = unreadNotis > 0 ? "Load More Notifications (" + unreadNotis + " unread)" : "Load More Notifications"
        return lastPageSize < 10 ? "No More Notifications" : loadMoreText
    }, [lastPageSize, unreadNotis])
    const nav = useNavWrapper();
    const goBack = React.useCallback(() => nav('/profile'), [nav])
    const height = React.useMemo(() => notis?.length > 19 ? 'h-full' : 'h-screen', [notis]);
    const getNotis = React.useCallback(async () => {
        const newPageOfNotis: any[] = await NotiApi.getNotis()
        const numUnread = newPageOfNotis.filter(noti => !noti.isRead).length
        notiContext.updateNotiCount(numUnread * -1);
        setLastPageSize(newPageOfNotis.length)
        setNotis([...notis, ...newPageOfNotis]);
        await NotiApi.dismissNotifications(newPageOfNotis.map(noti => noti.id));
    }, [notis, notiContext.updateNotiCount])
    const nextPage = React.useCallback(() => {
        if (lastPageSize > 0) {
            setPage(page + 1)
        }
    }, [page, lastPageSize])

    React.useEffect(() => {
        sessionStorage.removeItem('notiCursor');
        getNotis();
    }, [])

    React.useEffect(() => {
        if (init) {
            getNotis();
        }
        setInit(true);
    }, [page])

    return ( <div className={`flex flex-col dark:bg-slate-800 ${height}`}>
        <div className="flex p-4 justify-between">
            <div className="flex">
                <AlertIcon styling="h-9 w-9"/>
                <div className="flex flex-col">
                    <Text bold text='Notifications' />
                    <Text text='# Unread' />
                </div>
            </div>
            <div className="flex items-center cursor-pointer" onClick={goBack}>
                <LeftChevronIcon />
                <Text bold text="BACK" />
            </div>
        </div>
        <div className="flex flex-col justify-center px-4">
            {notis?.map((noti, ix) => <Noti key={noti.type + ix} message={noti.message} recieved={new Date(noti.timestamp)} />)}
        </div>
        <div className="p-4 cursor-pointer" onClick={nextPage}>
            <Text bold text={nextPageButtonText} />
        </div>
    </div>)
}

export default Notifications