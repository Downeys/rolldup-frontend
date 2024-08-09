import { SearchResult } from "../../cards/SearchResult/SearchResult";
import AddUserIcon from "../../icons/AddUserIcon";
import RemoveUserIcon from "../../icons/RemoveUserIcon";

interface ISearchFeedProps {
    results: any[];
    onClick: (type: ('add' | 'remove'), user: any) => void;
    type: 'user' | 'friend' | 'request';
}

export const UserFeed = (props: ISearchFeedProps) => {
    const handleClick = (name: string) => {
        const type = props.type === 'friend' ? 'remove' : 'add'
        props.onClick(type, { name })
    }
    return (
        <div>
            {props.results.map(user => <SearchResult type="user" label={user.username} lBtnIcon={props.type === 'request' && RemoveUserIcon} rBtnIcon={props.type === 'friend' ? RemoveUserIcon : AddUserIcon} onClick={handleClick} />)}
        </div>
    )
}

export default UserFeed