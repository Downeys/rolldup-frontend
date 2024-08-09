import React from "react";
import NotificationApi from "../../apis/NotificationApi";
import config from '../../config/config'
import { UserAccountInfo } from "./AccountProvider";
import { constructBadgeNoti, constructRankNoti } from "../../lib/functions/notiFuncs";

interface IRankNoti {
    id: number;
    rank: string;
    message: string;
    showNoti: boolean;
}

interface IBadgeNoti {
    id: number;
    message: string;
    label: string;
    level: string;
    showNoti: boolean;
}

interface INotificationProviderProps {
    notiCount: number;
    rankNoti: IRankNoti;
    badgeNoti: IBadgeNoti;
    resetNotiCount: () => void;
    updateNotiCount: (change: number) => void
    resetRankNoti: (notiId: number) => void;
    resetBadgeNoti: (notiId: number) => void;
}

export const UserNotifications = React.createContext<INotificationProviderProps>({} as INotificationProviderProps);

export const UserNotificationsProvider = (props) => {
    const [notiCount, setNotiCount] = React.useState(0)
    const [rankNoti, setRankNoti] = React.useState<IRankNoti>({ id: -1, rank: '', message: '', showNoti: false })
    const [badgeNoti, setBadgeNoti] = React.useState<IBadgeNoti>({ id: -1, message: '', level: '', label: '', showNoti: false })
    const resetNotiCount = React.useCallback(() => setNotiCount(0), [])
    const updateNotiCount = React.useCallback((change: number) => setNotiCount(notiCount + change), [notiCount])
    const resetRankNoti = React.useCallback(async (notiId: number) => {
        await NotificationApi.dismissNotifications([notiId])
        setRankNoti({ id: -1, rank: '', message: '', showNoti: false })
    }, [setRankNoti])
    const resetBadgeNoti = React.useCallback(async (notiId: number) => {
        await NotificationApi.dismissNotifications([notiId])
        setBadgeNoti({ id: -1, message: '', level: '', label: '', showNoti: false })
    }, [setBadgeNoti])
    const providedState = React.useMemo(() => ({
        notiCount,
        rankNoti,
        badgeNoti,
        resetNotiCount,
        updateNotiCount,
        resetRankNoti,
        resetBadgeNoti,
    }), [notiCount, rankNoti, badgeNoti, resetNotiCount, updateNotiCount, resetRankNoti, resetBadgeNoti])

    const [init, setInit] = React.useState(false);

    const initialNotiCheck = React.useCallback(() => {
        NotificationApi.getUnreadNotis()
            .then((notis) => {
                const rankNotis = notis.filter((noti) => noti.type === 'rank')
                const badgeNotis = notis.filter((noti) => noti.type === 'badge')
                if (rankNotis.length > 0) {
                    setRankNoti(constructRankNoti(rankNotis[0]))
                } else if (badgeNotis.length > 0) {
                    setBadgeNoti(constructBadgeNoti(badgeNotis[0]))
                }
                setNotiCount(notis.length)
                setInit(true)
            })
            .catch((e: any) => {
                console.log(e);
            });
    }, [])

    const handleNotiEvent = React.useCallback(async (event) => {
        const notification = JSON.parse(event.data)
        if (!notification.isRead) {
            if (notification.type === 'rank') {
                setRankNoti(constructRankNoti(notification))
                await NotificationApi.dismissNotifications([notification.id]);
            } else if (notification.type === 'badge') {
                setBadgeNoti(constructBadgeNoti(notification))
                await NotificationApi.dismissNotifications([notification.id]);
            } else {
                setNotiCount(notiCount + 1);
            }
        } else {
            setNotiCount(notiCount - 1);
        }
    }, [notiCount])

    const { authStatus } = React.useContext(UserAccountInfo);

    const [eventSource, setEventSource] = React.useState(null as EventSource | null);
    React.useEffect(() => {
        if (eventSource) {
            eventSource.close();
        }

        if (authStatus === 'LoggedIn') {
            if (!init) initialNotiCheck();
            const eventSource = new EventSource(`${config.EDGE.notificationUrl}/subscribe`, { withCredentials: true });
            eventSource.addEventListener("notification", handleNotiEvent);
            setEventSource(eventSource);
        }
    }, [authStatus])

    return <UserNotifications.Provider value={providedState}>
        {props.children}
    </UserNotifications.Provider>
}
