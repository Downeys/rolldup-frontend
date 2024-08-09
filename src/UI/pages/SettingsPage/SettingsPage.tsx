import React from "react"
import WrappedAccordion from "../../components/accordions/WrappedAccordion/WrappedAccordion"
import Logout from "./Logout/Logout"
import SettingsEmailCard from "./SettingsEmailCard/SettingsEmailCard"
import ProfileSettings from "./ProfileSettings/ProfileSettings"
import { UserAccountInfo } from "../../../utils/providers/AccountProvider"
import EndorsementApi from "../../../apis/EndorsementsApi"
import ModalWrapper from "../../components/modals/ModalWrapper"
import EndorsementsModal from "../../components/modals/EndorsementsModal/EndorsementsModal"
import NewUserModal from "../../components/modals/NewUserModal/NewUserModal"
import PoliciesModal from "../../components/modals/PoliciesModal/PoliciesModal"
import FeedbackApi from "../../../apis/FeedbackApi"
import ToastModal from "../../components/modals/ToastModal/ToastModal"
import { useNavWrapper } from "../../../utils/navigate-wrapper/useNavWrapper"
import PoliciesCard from "./PoliciesCard/PoliciesCard"
import ModalMessages from "../../../lib/constants/ModalMessages"

export const SettingsPage = () => {
    const nav = useNavWrapper();
    const acctContext = React.useContext(UserAccountInfo);
    const birthdate = React.useMemo(() => (new Date(acctContext.user.settings.profileSettings.birthdate)), [acctContext.user.settings.profileSettings.birthdate])
    const endorsements = React.useMemo(() => ({ ...acctContext.user.endorsements }), [acctContext.user.endorsements])
    const [showEndorsementModal, setShowEndorsementModal] = React.useState(!endorsements.adult || !endorsements.eula)
    const [showSetupModal, setShowSetupModal] = React.useState(false);
    const [showPolicyModal, setShowPolicyModal] = React.useState(false);
    const [modalPolicy, setModalPolicy] = React.useState('');
    const [defaultIndex, setDefaultIndex] = React.useState('');
    const [toastModalInfo, setToastModalInfo] = React.useState({ visible: false, message: '' });
    const [settings, setSettings] = React.useState({
        profile: {
            Username: acctContext.user.username,
            'Profile Image': '',
            Password: '',
            Pronouns: acctContext.user.settings.profileSettings.pronouns,
            'dd/mm/yyyy': birthdate.toISOString().split('T')?.[0],
            Privacy: acctContext.user.settings.profileSettings.privacy,
        },
        display: acctContext.user.settings.displaySettings.mode,
        pushNotis: {
            Messages: acctContext.user.settings.pushNotifications.messages,
            'Group Activity': acctContext.user.settings.pushNotifications.groupActivities,
            Comments: acctContext.user.settings.pushNotifications.comments,
            'Friend Requests': acctContext.user.settings.pushNotifications.friendRequests,
            Recommendations: acctContext.user.settings.pushNotifications.recommendations,
            'Email Newsletter': acctContext.user.settings.pushNotifications.newsletter
        },
    })

    const handleSave = React.useCallback((newSettings) => {
        setSettings({ ...settings, ...newSettings })
        setToastModalInfo({ visible: true, message: ModalMessages.settingsUpdated })
    }, [settings, setSettings])

    const handleFeedbackSubmit = async (message: string) => {
        await FeedbackApi.sendFeedback(message);
        setToastModalInfo({ visible: true, message: ModalMessages.feedbackSubmitted })
    }
    const handleHelpRequestSubmit = async (message: string) => {
        await FeedbackApi.sendHelpRequest(message);
        setToastModalInfo({ visible: true, message: ModalMessages.helpRequestSubmitted })
    }

    const settingsTabs = React.useMemo(() => (
        [
            { label: 'Profile', content: (() => <ProfileSettings value={settings.profile} onSave={handleSave} />) },
            // { label: 'Display', content: (() => (<BinaryOption name='display' selection={settings.display} option1="Light" option2="Dark" onSave={handleDisplayUpdate} />)) },
            // { label: 'Notifications', content: (() => (<NotificationSettings pushNotis={settings.pushNotis} onSave={handleSave} />)) },
            { label: 'Feedback', content: (() => (<SettingsEmailCard message='Describe your experience' submit={handleFeedbackSubmit} />)) },
            { label: 'Help', content: (() => (<SettingsEmailCard message='Describe the issue' submit={handleHelpRequestSubmit}/>)) },
            { label: 'Policies', content: (() => (<PoliciesCard onPrivacyClick={handlePrivacyClick} onTermsClick={handleTermsClick} />)) },
            // { label: 'Terms of Service', content: (() => (<p>Terms of Service</p>)) },
            // { label: 'Store', content: (() => (<p>Store</p>)) },
            // { label: 'Rate Us', content: (() => (<p>Rate Us</p>)) },
            { label: 'Log Out', content: (() => (<Logout />)) },

        ]
    ), [])

    const handleAcceptEndorsements = React.useCallback(async () => {
        const updatedUser = await EndorsementApi.endorseEulaAndAge()
        acctContext.updateUser(updatedUser)
        setShowEndorsementModal(false);
        nav('/')
        // if(acctContext.user.endorsements.firstLogin) setShowSetupModal(true);
    }, [showEndorsementModal, showSetupModal])

    const handleDeclineEndorsements = React.useCallback(async () => {
        acctContext.logUserOut();
    }, [])

    const handleAcceptSetup = React.useCallback(async () => {
        await EndorsementApi.endorseFirstLogin();
        acctContext.refreshUser(acctContext.user.username)
        setShowSetupModal(false);
        setDefaultIndex('Profile')
    }, [showSetupModal, defaultIndex])

    const handleDeclineSetup = React.useCallback(async () => {
        await EndorsementApi.endorseFirstLogin();
        acctContext.refreshUser(acctContext.user.username)
        nav('/');
    }, [acctContext.user.username])

    const handleTermsClick = React.useCallback(() => {
        setModalPolicy('terms')
        setShowEndorsementModal(false);
        setShowPolicyModal(true);
    }, [modalPolicy, showEndorsementModal, showPolicyModal])

    const handlePrivacyClick = React.useCallback(() => {
        setModalPolicy('privacy')
        setShowEndorsementModal(false);
        setShowPolicyModal(true);
    }, [modalPolicy, showEndorsementModal, showPolicyModal])

    const handlePolicyClose = React.useCallback(() => {
        setShowPolicyModal(false)
        if (!endorsements.adult || !endorsements.eula) setShowEndorsementModal(true)
    }, [showPolicyModal, showEndorsementModal])

    return (
        <div className="h-screen dark:bg-slate-800">
            <ModalWrapper showModal={toastModalInfo.visible} onCancel={() => {}} ><ToastModal message={toastModalInfo.message} onClose={() => setToastModalInfo({ visible: false, message: '' })} /></ModalWrapper>
            <ModalWrapper showModal={showEndorsementModal} onCancel={() => {}} ><EndorsementsModal onTermsClick={handleTermsClick} onPrivacyClick={handlePrivacyClick} onAccept={handleAcceptEndorsements} onDecline={handleDeclineEndorsements} /></ModalWrapper>
            <ModalWrapper showModal={showSetupModal} onCancel={() => {}} ><NewUserModal onAccept={handleAcceptSetup} onDecline={handleDeclineSetup} /></ModalWrapper>
            <ModalWrapper showModal={showPolicyModal} onCancel={() => {}} ><PoliciesModal onClose={handlePolicyClose} policy={modalPolicy}/></ModalWrapper>
            <WrappedAccordion menuItems={settingsTabs} defaultIndex={defaultIndex || ''} />
        </div>
    )
}

export default SettingsPage
