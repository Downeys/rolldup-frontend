import React from 'react'
import Logo from '../../../assets/images/WorkingLogo.png'
import { useNavWrapper } from '../../../utils/navigate-wrapper/useNavWrapper';
import { UserAccountInfo } from '../../../utils/providers/AccountProvider'
import { ProfileImage } from '../../components/cards/UserProfileCard/ProfileImage/ProfileImage'
import SettingsIcon from '../../components/icons/SettingsIcon'
import StrainLogApi from '../../../apis/StrainLogApi';
import HeaderSearch from '../../components/SearchBar/HeaderSearch';
import { useLocation } from 'react-router-dom';
import { UserNotifications } from '../../../utils/providers/NotificationProvider';
import Face from '../../components/Face/Face';

interface IHeaderProps {
    childPage: string;
}

export const Header = (props: IHeaderProps) => {
    const nav = useNavWrapper();
    const acctContext = React.useContext(UserAccountInfo);
    const notiContext = React.useContext(UserNotifications)
    const unreadNotis = React.useMemo(() => notiContext.notiCount > 0, [notiContext.notiCount])
    const profileImageUrl = React.useMemo(() => acctContext.user.profilePic, [acctContext.user.profilePic])
    const [searchStr, setSearchStr] = React.useState('');
    const [searchHasFocus, setSearchHasFocus] = React.useState(false);
    const [results, setResults] = React.useState([] as any[]);
    const location = useLocation();

    React.useEffect(() => {
        if (acctContext.user.username && location.pathname !== '/settings'  && (!acctContext.user?.endorsements?.eula || !acctContext.user?.endorsements?.eula)) nav('/settings')
    }, [])

    const handleLogoClick = () => {
        sessionStorage.removeItem("homeFeedCursor");
        nav('/')
    }

    const handleProfileClick = () => {
        nav('/profile')
    }

    const handleSettingsClick = () => {
        nav('/settings')
    }

    const manageFocus = (focusObj: any) => {
        if (focusObj.focus === 'none') removeFocus();
        else giveFocus();
    }

    const giveFocus = () => {
        setSearchHasFocus(true);
    }

    const removeFocus = () => {
        if (searchHasFocus) setSearchHasFocus(false);
    }

    const handleSearchChange = async (str: string) => {
        setSearchStr(str);
        setResults(await StrainLogApi.searchStrainByName(str));
    }

    const handleSelection = (strainObj: any) => {
        removeFocus();
        setSearchStr(strainObj.strainName);
        sessionStorage.removeItem('searchCursor');
        const path = '/search?searchstr=' + strainObj.strainName;
        nav(path);
    }

    return (
        <div className='flex justify-between items-center sticky top-0 bg-white dark:bg-slate-800 z-40 h-14 shadow-headerShadow w-screen max-w-screen-sm' >
            <div className='w-9 ml-3 flex-shrink-0'>
                <img className='h-9 w-9' src={Logo} alt="Logo" onClick={handleLogoClick} />
            </div>
            <div className='shadow-inputInnerShadow rounded bg-white'>
                <HeaderSearch
                    onSearch={handleSearchChange}
                    onSelect={handleSelection}
                    searchResults={results}
                    hasFocus={searchHasFocus}
                    takeFocus={manageFocus}
                />
            </div>
            <div className='flex flex-col items-center justify-end w-9 flex-shrink-0 mr-3 ml-2' >
                {(unreadNotis && props.childPage !== '/profile') && <div className="h-3 w-3" />}
                {(props.childPage !== '/profile' && !profileImageUrl) && <span onClick={handleProfileClick}><Face styling='h-9 w-9' /></span>}
                {(props.childPage !== '/profile' && profileImageUrl) && <span onClick={handleProfileClick}><ProfileImage size='sm' imageUrl={profileImageUrl} onClick={handleProfileClick} /></span>}
                {props.childPage === '/profile' && <span onClick={handleSettingsClick}><SettingsIcon /></span>}
                {(unreadNotis && props.childPage !== '/profile') && <div className="relative -top-3 left-1 z-10 border rounded-full bg-red h-3 w-3" />}
            </div>
        </div>
    )
}

export default Header
