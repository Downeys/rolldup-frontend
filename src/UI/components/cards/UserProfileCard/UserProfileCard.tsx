import Heading from '../../typography/Heading/Heading'
import SubHeading from '../../typography/SubHeading/SubHeading'
import Text from '../../typography/Text/Text'
import AlertIcon from '../../icons/AlertIcon'
import ProfileImage from './ProfileImage/ProfileImage'
import React from 'react'
import { useNavWrapper } from '../../../../utils/navigate-wrapper/useNavWrapper'
import { UserNotifications } from '../../../../utils/providers/NotificationProvider'

interface IUserProfileCardProps {
    username: string;
    profilePic: string;
    rank: string;
    joinDate: Date;
    tokes: number;
    onEdit: () => void;
}

export const UserProfileCard = (props: IUserProfileCardProps) => {
    const nav = useNavWrapper();
    const notiContext = React.useContext(UserNotifications)
    const unreadNotis = React.useMemo(() => notiContext.notiCount > 0, [notiContext.notiCount])

    const navigateToNotifications = () => {
        nav('/notifications');
    }

    return (
        <div className="flex flex-col h-44 mt-4">
            <div className="flex flex-row h-20 my-2">
                <div className="flex flex-col w-1/3 items-center">
                    <SubHeading text='Tokes' />
                    {props.tokes && <Text size='2xl' semibold text={''+props.tokes} additionalStyles='text-darkGreen leading-7' />}
                </div>
                <div className="flex flex-col w-1/3 items-center">
                    <ProfileImage size='md' editable onClick={props.onEdit} imageUrl={props.profilePic} />
                </div>
                <div className="flex flex-col w-1/3 items-center">
                    <SubHeading text='Rank' />
                    {props.rank && <Text size='lg' semibold text={props.rank} additionalStyles='text-darkGreen leading-7 xs:text-2xl' />}
                </div>
            </div>
            <div className="flex flex-row h-14 my-2">
                <div className="flex flex-col w-1/3 items-center"/>
                <div className="flex flex-col w-1/3 items-center">
                    <Heading text={props.username} /> 
                    <Text semibold alignment='center' size='sm' text={`Joined ${props.joinDate.toDateString()}`} />
                </div>
                <div className="flex flex-col w-1/3 items-center justify-end mb-4">
                    <AlertIcon onClick={navigateToNotifications}/>
                    {unreadNotis && <div className="relative -top-1/4 left-2 z-10 border rounded-full bg-red h-2 w-2" />}
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard