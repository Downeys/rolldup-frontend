import React from "react";
import SettingsApi from "../../../../apis/SettingsApi";
import { UserAccountInfo } from "../../../../utils/providers/AccountProvider";
import WrappedAccordion from "../../../components/accordions/WrappedAccordion/WrappedAccordion";
import ActionButton from "../../../components/buttons/ActionButton/ActionButton";
import SettingsToggle from "../SettingsToggle/SettingsToggle"

interface IToggleListProps {
    settingList: any;
    onSave: (noti: any) => void
}

interface IUpdateNotificationsProps {
    onSave: (settings: any) => any
    pushNotis: any;
}

const ToggleList = (props: IToggleListProps) => {
    const [isEditable, setIsEditable] = React.useState(false)
    const [settingsList, setSettingsList] = React.useState(props.settingList)

    const handleClick = () => {
        const isEditableCopy = !!isEditable
        setIsEditable(!isEditableCopy)
        if (isEditableCopy) props.onSave(settingsList)
    }

    const handleToggle = (noti: string) => {
        setSettingsList({ ...settingsList, [noti]: !settingsList[noti]})
    }
    
    return (
        <div>
            {Object.keys(settingsList).map(noti => <SettingsToggle name={noti} isEditable={isEditable} onToggle={handleToggle} isOn={settingsList[noti]} />)}
            <ActionButton appearance={isEditable ? 'primary' : 'tertiary'} text={isEditable ? 'Save' : 'Edit'} additionalStyles="mx-4 w-11/12" onClick={handleClick}/>
        </div>
    )
}

export const NotificationSettings = (props: IUpdateNotificationsProps) => {
    const acctContext = React.useContext(UserAccountInfo);
    const [pushNotis, setPushNotis] = React.useState(props.pushNotis)

    const handlePushNotiSave = async (newSettings) => {
        const notificationsObj = {
            messages: newSettings.Messages,
            groupActivities: newSettings['Group Activity'],
            comments: newSettings.Comments,
            friendRequests: newSettings['Friend Requests'],
            recommendations: newSettings.Recommendations,
            newsletter: newSettings['Email Newsletter']
        }
        await SettingsApi.updateNotifications(notificationsObj);
        acctContext.refreshUser(acctContext.user.username);
        setPushNotis(newSettings)
        props.onSave({ pushNotis: { ...newSettings } })
    }

    return (
        <div className="ml-6">
            <ToggleList settingList={pushNotis} onSave={handlePushNotiSave} />
        </div>
    )
}

export default NotificationSettings