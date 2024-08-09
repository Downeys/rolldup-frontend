import UserStatPanel from './UserStatPanel/UserStatPanel'
import CategoriesIcon from '../../icons/CategoriesIcon'
import HeartIcon from '../../icons/HeartIcon'
import RatingStarIcon from '../../icons/RatingStarIcon'

interface IUserStats {
    strains: number;
    reviews: number;
    favorites: number;
}

export const UserStatCard = (props: IUserStats) => {
    return (
        <div className='h-24 flex flex-row'>
            <UserStatPanel statName='Strains' statIcon={CategoriesIcon} stat={props.strains} />
            <UserStatPanel statName='Reviews' statIcon={RatingStarIcon} stat={props.reviews} />
            <UserStatPanel statName='Favorites' statIcon={HeartIcon} stat={props.favorites} />
        </div>
    )
}

export default UserStatCard