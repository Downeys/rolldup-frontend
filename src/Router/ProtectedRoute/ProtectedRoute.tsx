import React from 'react';
import { useNavigate } from 'react-router';
import SplashComponent from '../../UI/components/SplashScreen/SplashComponent';
import { UserAccountInfo } from '../../utils/providers/AccountProvider';

export const ProtectedRoute = (props) => {
    // we're inentionally not useing the navWrapper in this component because we don't want to muddle with local storage and our last page visited
    const navigate = useNavigate();
    const { validateUser, authStatus } = React.useContext(UserAccountInfo);
    const isAuthenticated = React.useMemo(() => {
        return authStatus === 'LoggedIn';
    }, [authStatus])

    React.useEffect(() => {
        if (authStatus === 'none' || authStatus === 'Failed') {
            validateUser()
            .catch((e) => {
                console.error(e.message)
                navigate('/error')
            })
        }
    }, [authStatus, validateUser, navigate])

    return isAuthenticated ? props.children : <SplashComponent />;
}