import config from "../config/config";
import { FetchWrapper } from "../utils/fetch-wrapper/FetchWrapper";

export const updateNotifications = async (notiSettings) => await FetchWrapper.post(`${config.EDGE.settingsUrl}/notifications`, { ...notiSettings })

export const updateDisplay = async (darkMode) => await FetchWrapper.post(`${config.EDGE.settingsUrl}/display`, { darkMode })

export const updatePrivacy = async (publicProfile) => await FetchWrapper.post(`${config.EDGE.settingsUrl}/privacy`, { publicProfile })

export const updateBirthdate = async (birthdate) => await FetchWrapper.post(`${config.EDGE.settingsUrl}/birthdate`, { birthdate })

export const updatePronouns = async (pronouns) =>  await FetchWrapper.post(`${config.EDGE.settingsUrl}/pronouns`, { pronouns })

export const updateUsername = async (newUsername) =>  await FetchWrapper.post(`${config.EDGE.settingsUrl}/username`, { newUsername })

export const updateProfilePic = async (profilePic) => {
    const response: any = await fetch(`${config.EDGE.settingsUrl}/pic`, {
        method: 'POST',
        credentials: 'include',
        body: profilePic
    })
    .then(res => res.json())
    .catch(console.log)
    const returnVal = response.result;
    return returnVal;
}

export default { updateNotifications, updateDisplay, updatePrivacy, updateBirthdate, updatePronouns, updateUsername, updateProfilePic }
