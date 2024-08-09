import React from "react";
import { useNavigate } from "react-router";
import AuthApi from "../../apis/AuthApi";
import UserApi from '../../apis/UsersApi';
import { login, retrieveUserInfo, logout } from "../../lib/functions/authFuncs";

interface IProfileSettings {
    pronouns: string;
    birthdate: Date;
    privacy: string;
}

interface IDisplaySettings {
    mode: string;
}

interface IPushNotiSettings {
    messages: boolean;
    groupActivities: boolean;
    comments: boolean;
    friendRequests: boolean;
    recommendations: boolean;
    newsletter: boolean;
}

interface IUserSettings {
    profileSettings: IProfileSettings;
    displaySettings: IDisplaySettings;
    pushNotifications: IPushNotiSettings;
}

interface IEndorsements {
    eula: boolean,
    adult: boolean,
    firstLogin: boolean,
}

interface IUserInfo {
    id: number;
    username: string;
    rank: string;
    profilePic: string;
    joinDate: Date;
    settings: IUserSettings;
    endorsements: IEndorsements;
    appRoles: string[];
}

interface IProviderFunctions {
    refreshUser: (username: string) => void;
    updateUser: (updatedUser: IUserInfo) => void;
    validateUser: () => Promise<void>;
    handleValidatedUser: (claims: any) => Promise<void>;
    logUserOut: () => Promise<void>;
}

interface IAccountProvider extends IProviderFunctions {
    user: IUserInfo;
    authStatus: string;
}

export const UserAccountInfo = React.createContext<IAccountProvider>({} as IAccountProvider)

export const UserAccountInfoProvider = (props) => {
    // we're inentionally not useing the navWrapper in this component because we don't want to muddle with local storage and our last page visited
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = React.useState({} as IUserInfo)
    const updateUser = React.useCallback((updatedUser: IUserInfo) => setUserInfo(updatedUser), [])
    const [authStatus, setAuthStatus] = React.useState('none')
    const logUserOut = React.useCallback(async () => {
        setAuthStatus('none');
        await logout();
    }, [setAuthStatus])
    const refreshUser = React.useCallback(async () => setUserInfo(await UserApi.getUserInfo()), [setUserInfo]);
    const handleValidatedUser = React.useCallback(async (claims: any) => {
        localStorage.setItem("exp", claims.exp)
        retrieveUserInfo()
        .then((userResponse) => {
            setUserInfo(userResponse);
            setAuthStatus('LoggedIn')
        })
        .catch((e) => {
            console.error(e.message)
            setAuthStatus('Failed')
            navigate('/error')
        })
    }, [setAuthStatus, setUserInfo])

    const validateUser = React.useCallback(async () => {
        setAuthStatus('InProgress');
        AuthApi.exchangeRefreshTokenForAuthCookies()
        .then((resp) => {
            if (resp.authenticated) {
                handleValidatedUser(resp?.tokenClaims)
            }
            else if (authStatus !== 'Redirecting') {
                setAuthStatus('Redirecting');
                login()
            }
        })
        .catch((e) => {
            const errorMessage: string = e.message;
            if (errorMessage.includes('no token')) {
                setAuthStatus('Redirecting');
                login()
            } else {
                console.error(e.message)
                setAuthStatus('Failed')
                navigate('/error')
            }
            
        });
    }, [setAuthStatus, navigate])

    const providedState: IAccountProvider = React.useMemo(() => {
        return ({
        refreshUser,
        logUserOut,
        validateUser,
        handleValidatedUser,
        updateUser,
        authStatus,
        user: userInfo
    })}, [authStatus, refreshUser, userInfo, validateUser, handleValidatedUser, updateUser])

    return <UserAccountInfo.Provider value={providedState}>
        {props.children}
    </UserAccountInfo.Provider>
}