import React from "react"
import { UserAccountInfo } from "../../../../utils/providers/AccountProvider"
import UserFeed from "../../../components/feeds/UserFeed/UserFeed"
import ModalWrapper from "../../../components/modals/ModalWrapper"
import UserModal from "../../../components/modals/UserModal/UserModal"
import SearchBar from "../../../components/SearchBar/SearchBar"
import SectionHeader from "../../../components/SectionHeader/SectionHeader"
import Text from '../../../components/typography/Text/Text'

interface IModal {
    show: boolean;
    type: 'add' | 'remove';
    user: any;
}

export const FriendsTab = () => {
    const acctContext = React.useContext(UserAccountInfo)
    const [searchStr, setSearchStr] = React.useState('')
    const [modal, setModal] = React.useState<IModal>({ show: false, type: 'add', user: {} })
    const [friends, setFriends] = React.useState([] as any[]);
    const filteredFriends = React.useMemo(() => friends.filter(user => user.username?.toLowerCase().includes(searchStr.toLowerCase())), [searchStr, friends])
    const [pending, setPending] = React.useState([] as any[]);
    const filteredPending = React.useMemo(() => pending.filter(user => user.username?.toLowerCase().includes(searchStr.toLowerCase())), [searchStr, pending])
    const [userResults, setUserResults] = React.useState([] as any[]);
    const filteredUsers = React.useMemo(() => {
        const friendNames = [ ...friends.map(user => user.username), ...pending.map(user => user.username), acctContext.user.username];
        return userResults.filter(user => !friendNames.includes(user.username));
    }, [friends, userResults])
    const height = React.useMemo(() => filteredFriends.length + filteredUsers.length > 19 ? 'h-full' : 'h-screen', [filteredFriends, filteredUsers])

    // React.useEffect(() => {
    //     (async () => {
    //         const relationships = await getAllFriends(acctContext.user.username);
    //         let fds: any[] = [];
    //         let pnd: any[] = [];
    //         relationships.forEach(rel => {
    //             if(rel.type === 'friend') {
    //                 if(rel.status === 'A') fds.push(rel.otherParty)
    //                 else if(rel.status === 'P' && rel.role === 'recipient') pnd.push(rel.otherParty);
    //                 else console.log("Something's not right here.")
    //             }
    //         });
    //         setFriends(fds);
    //         setPending(pnd);
    //     })()
    // }, [])

    const handleSearch = async (str: string) => {
        setSearchStr(str)
        if(str === '') {
            setUserResults([]);
            return;
        }
        // search user is no longer implemented in backend
        // setUserResults(await searchUsersByUsername(str));
    }

    const handleInteraction = (type: 'add' | 'remove', user: any) => {
        setModal({ show: true, type, user })
    }

    return (
        <div className={`w-full ${height}`}>
            <div className="mt-4 mx-9">
                <SearchBar name="Search Users" iconPosition="left" border onChange={handleSearch} />
            </div>
            <div className="mt-4 md:mx-2">
                {filteredPending.length > 0 && <>
                    <SectionHeader label="Friend Requests" />
                    <UserFeed results={filteredPending} type='request' onClick={handleInteraction} />
                </>}
                {filteredFriends.length > 0 && <>
                    <SectionHeader label="Friends" />
                    <UserFeed results={filteredFriends} type='friend' onClick={handleInteraction} />
                </>}
                {searchStr !== '' && <>
                    <SectionHeader label="All Users" />
                    <UserFeed results={filteredUsers} type='user' onClick={handleInteraction} />
                    {filteredUsers.length < 1 && <div className="flex h-12 justify-center items-center">
                        <Text semibold text="No search results match your query." />
                    </div>}
                </>}
                <div className="h-28" />
            </div>
            <ModalWrapper showModal={modal.show} onCancel={() => {setModal({ ...modal, show: false })}}><UserModal onClick={() => setModal({ show: false, type: 'add', user: {} })} user={modal.user} type={modal.type}/></ModalWrapper>
        </div>
    )
}

export default FriendsTab