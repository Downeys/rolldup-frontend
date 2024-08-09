export const constructRankNoti = (noti) => ({
    id: noti.id,
    rank: noti.additionalProperties.newRankLabel,
    message: noti.message,
    showNoti: true
})

export const constructBadgeNoti = (noti) => ({
    id: noti.id,
    message: noti.message,
    level: noti.additionalProperties.level,
    label: noti.additionalProperties.label,
    showNoti: true
})