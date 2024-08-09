import React from 'react'
import Header from '../../../pages/Header/Header'
import { ILayoutProps } from '../../shared-UI-Interfaces'
import { UserNotifications } from '../../../../utils/providers/NotificationProvider'
import ModalWrapper from '../../modals/ModalWrapper'
import RankUpModal from '../../modals/RankUpModal/RankUpModal'
import BadgeNotificationModal from '../../modals/BadgeModal/BadgeNotificationModal'

export const NoFabLayout = (props: ILayoutProps) => {
    const [childPage] = React.useState(window.location.pathname)
    const notiContext = React.useContext(UserNotifications)
    const rankUpModal = React.useMemo(() => {
        if (notiContext.rankNoti.showNoti) return { ...notiContext.rankNoti }
        else return { showNoti: false, message: '', rank: '', id: -1 }
    }, [notiContext.rankNoti])
    const badgeModal = React.useMemo(() => {
        if (notiContext.badgeNoti.showNoti) return { ...notiContext.badgeNoti }
        else return { showNoti: false, message: '', level: '', label: '', id: -1 }
    }, [notiContext.badgeNoti])
    
    const ChildComponent = props.component;

    return (
        <div className='h-full w-full flex justify-center bg-texasGreen bg-opacity-75'>
            <div className="flex flex-col w-full max-w-screen-sm bg-white">
                <Header childPage={childPage} />
                <ModalWrapper showModal={rankUpModal.showNoti} onCancel={() => {}} ><RankUpModal rank={rankUpModal.rank} message={rankUpModal.message} onClose={() => notiContext.resetRankNoti(rankUpModal.id) } /></ModalWrapper>
                <ModalWrapper showModal={badgeModal.showNoti} onCancel={() => {}} ><BadgeNotificationModal message={badgeModal.message} label={badgeModal.label} level={badgeModal.level} onClose={() => notiContext.resetBadgeNoti(badgeModal.id) } /></ModalWrapper>
                <ChildComponent />
            </div>
        </div>
    )
}

export default NoFabLayout;