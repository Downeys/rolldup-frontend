import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SplashComponent from "../../UI/components/SplashScreen/SplashComponent";
import { callbackUri } from "./auth";
import AuthApi from '../../apis/AuthApi';
import config from '../../config/config';
import { UserAccountInfo } from '../providers/AccountProvider';
import { CODE_VERIFIER_SESSION_STORAGE_KEY, forgotPassword, login } from '../../lib/functions/authFuncs';

const AuthCallback = () => {
    // we're inentionally not useing the navWrapper in this component because we don't want /auth-callback saved in local storage as our last page visited
    const navigate = useNavigate();
    const location = useLocation();
    const acctContext = React.useContext(UserAccountInfo);

    const [code, codeVerifier, errorDescription] = React.useMemo(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        const codeVerifier = sessionStorage[CODE_VERIFIER_SESSION_STORAGE_KEY];
        const errorDescription = params.get('error_description');
        return [code, codeVerifier, errorDescription];
    }, [location.search])

    const exchangeCode = React.useCallback(async () => {
        if (code && codeVerifier) return await AuthApi.exchangeCodeForAuthCookies(config.AUTH.clientId, code, callbackUri, codeVerifier)
    }, [code, codeVerifier])

    React.useEffect(() => {
        if (code && codeVerifier) {
            exchangeCode()
            .then((resp) => {
                if (resp.authenticated) {
                    acctContext.handleValidatedUser(resp?.tokenClaims)
                    .then(() => {
                        const path = localStorage.getItem("last") || '/';
                        sessionStorage.clear();
                        navigate(path)
                    })
                    .catch((e) => {
                        console.error(e.message)
                        navigate('/error')
                    })
                } else {
                    navigate('/error')
                }
            })
            .catch((e) => {
                console.error(e.message)
                navigate('/error')
            })
        }
    }, [code, codeVerifier])

    React.useEffect(() => {
        if (errorDescription?.includes('AADB2C90118')) forgotPassword();
        if (errorDescription?.includes('AADB2C90091')) login();
    }, [errorDescription])

    return (
        <SplashComponent />
    )
}

export default AuthCallback;
