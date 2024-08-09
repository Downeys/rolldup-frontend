import React from "react"
import WrappedAccordion from "../../../components/accordions/WrappedAccordion/WrappedAccordion"
import BinaryOption from "../../../components/buttons/BinaryOption/BinaryOption"
import UpdateProfilePic from "./UpdateProfilePic/UpdateProfilePic"
import EditField from "../../../components/EditField/EditField"
import { UserAccountInfo } from "../../../../utils/providers/AccountProvider"
import SettingsApi from "../../../../apis/SettingsApi"
import UpdatePronouns from "./UpdatePronouns/UpdatePronouns"

interface IProfileSettingsProps {
    onSave: (settings: any) => void;
    value: any;
}

export const ProfileSettings = (props: IProfileSettingsProps) => {
    const acctContext = React.useContext(UserAccountInfo);
    const [settingsObj, setSettingsObj] = React.useState(props.value)
    const ref = React.useRef<HTMLInputElement>(null);

    const handleSave = (newSettings) => {
        setSettingsObj({ ...settingsObj, ...newSettings})
        props.onSave({ profile: { ...settingsObj, ...newSettings} })
    }

    const setImageFile = async () => {
        if (ref.current?.files) {
            const file = ref.current.files[0];
            let formData = new FormData();
            formData.append("file", file);
            formData.append("username", acctContext.user.username);
            const imageUrl = await SettingsApi.updateProfilePic(formData);
            acctContext.refreshUser(acctContext.user.username);
            handleSave({ 'Profile Image': imageUrl });
        }
    }

    const handleUpdateProfilePic = async (update: any) => {
        ref.current && ref.current?.click();
    }

    const handleUpdateUsername = async (update: any) => {
        await SettingsApi.updateUsername(update.Username);
        acctContext.refreshUser(update.Username);
        handleSave(update);
    }

    const handlePronounsUpdate = async (update: any) => {
        await SettingsApi.updatePronouns(update.Pronouns);
        acctContext.refreshUser(acctContext.user.username);
        handleSave(update);
    }

    const handleBirthdateUpdate = async (update: any) => {
        await SettingsApi.updateBirthdate(update['dd/mm/yyyy']);
        acctContext.refreshUser(acctContext.user.username);
        handleSave(update);
    }

    const handlePrivacyUpdate = async (update: any) => {
        await SettingsApi.updatePrivacy(update.Privacy === 'public');
        acctContext.refreshUser(acctContext.user.username);
        handleSave(update);
    }

    const settingsTabs = [
        { label: 'Change User Name', content: (() => (<EditField name='Username' value={settingsObj.Username} onSave={handleUpdateUsername} />)) },
        { label: 'Update Profile Image', content: (() => (<UpdateProfilePic value={settingsObj['Profile Image']} onSave={handleUpdateProfilePic} />)) },
        { label: 'Pronouns', content: (() => (<UpdatePronouns pronouns={settingsObj.Pronouns} onSave={handlePronounsUpdate} />)) },
        { label: 'Birth Day', content: (() => (<EditField value={settingsObj['dd/mm/yyyy']} name='dd/mm/yyyy' type="date" onSave={handleBirthdateUpdate}/>)) },
        // { label: 'Privacy', content: (() => (<BinaryOption name='Privacy' selection={settingsObj.Privacy} option1="Public" option2="Private" onSave={handlePrivacyUpdate} />)) },
    ]

    return (
        <div className="ml-6">
            <input ref={ref} onChange={setImageFile} type='file' hidden />
            <WrappedAccordion menuItems={settingsTabs} />
        </div>
    )
}

export default ProfileSettings