import CardButton from "../../buttons/CardButton/CardButton"
import HeartIcon from "../../icons/HeartIcon"
import Rating from "../../buttons/Rating/Rating"
import React from "react"
import Text from "../../typography/Text/Text"
import { UserAccountInfo } from "../../../../utils/providers/AccountProvider"
import StrainLogApi from "../../../../apis/StrainLogApi"
import CommentCard from "../CommentCard/CommentCard"
import ProfileImage from "../UserProfileCard/ProfileImage/ProfileImage"
import CommentIcon from "../../icons/CommentIcon"
import BookmarkIcon from "../../icons/BookmarkIcon"
import ReviewDispCard from "../ReviewDispCard/ReviewDispCard"
import StrainCardHeader from "./StrainCardHeader/StrainCardHeader"
import { Brand, Product, PurchaseLocation, Strain } from "../../../../lib/types"

interface IStrainCardProps {
    id: number;
    pictureUrl: string;
    owner: any;
    strain: Strain;
    brand?: Brand;
    product?: Product;
    purchaseLocation?: PurchaseLocation;
    cannabinoid: string;
    percentage?: number;
    mgs?: number;
    review?: string;
    rating: number;
    isFavorite: boolean;
    isBookmarked: boolean;
    comments: any[];
    onEditLog: () => void;
    onRemoveLog: (logId: number) => void;
    onReportContent: (logId: number) => void;
}

export const StrainCard = (props: IStrainCardProps) => {
    const acctContext = React.useContext(UserAccountInfo)
    const [favorite, setFavorite] = React.useState(props.isFavorite)
    const [bookmarked, setBookmarked] = React.useState(props.isBookmarked)
    const [expanded, setExpanded] = React.useState(false);
    const [comments, setComments] = React.useState(props.comments);
    const [commenting, setCommenting] = React.useState(false);
    const [commentMessage, setCommentMessage] = React.useState("");

    const handleHeartClick = async () => { 
        if (acctContext.authStatus === 'LoggedIn') {
            if (!favorite) {
                await StrainLogApi.addFavorite(props.owner.username, props.id)
            } else {
                await StrainLogApi.removeFavorite(props.id)
            }
            setFavorite(!favorite);
        }
    }

    const handleCommentChange = (e) => {
        setCommentMessage(e.target.value);
    }

    const handleCommenting = async (savable: boolean = true) => {
        if (acctContext.authStatus === 'LoggedIn') {
            if(!commenting) {
                setCommenting(!commenting);
                return;
            };
            setCommenting(!commenting);
            if (savable && commentMessage.length > 0) {
                await StrainLogApi.addCommentToLog({ logId: props.id, engager: acctContext.user.username, recipient: props.owner.username, message: commentMessage });
                const newComment = {
                    owner: { username: acctContext.user.username },
                    message: commentMessage
                }
                setCommentMessage("")
                setComments([...comments, newComment])    
                setExpanded(true);  
            }
        }

    }

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (commentMessage.length > 0) {
            await StrainLogApi.addCommentToLog({ logId: props.id, engager: acctContext.user.username, recipient: props.owner.username, message: commentMessage });
            const newComment = {
                owner: { username: acctContext.user.username },
                message: commentMessage
            }
            setCommentMessage("")
            setComments([...comments, newComment])    
            setExpanded(true);  
        }
    }

    const handleBookmarkClick = () => {
        if (acctContext.authStatus === 'LoggedIn') {
            if (bookmarked) StrainLogApi.removeBookmark(props.id).catch((e) => console.log(e));
            if (!bookmarked) StrainLogApi.addBookmark(props.id).catch((e) => console.log(e));
            setBookmarked(!bookmarked)
        }
    }

    return (
        <div className="flex flex-col justify-between bg-white dark:bg-slate-800 mb-4">
            <div>
                <StrainCardHeader category={props.strain.category || ''} id={props.id} username={props.owner.username} mgs={props.mgs} percentage={props.percentage} strain={props.strain.strain} cannabinoid={props.cannabinoid} strainName={props.strain?.name} brandName={props.brand?.name} productName={props.product?.name}  onRemoveLog={props.onRemoveLog} onReportContent={props.onReportContent} onEditLog={props.onEditLog} />
                <div className="bg-transparent">
                    <img src={props.pictureUrl} alt="strain pic" className="h-full w-full" />
                </div>
                <div className="flex justify-between pt-4">
                    <span>
                        <CardButton icon={HeartIcon} clickHandler={handleHeartClick} styling='ml-4 mr-3' selected={favorite} />
                        <CardButton icon={CommentIcon} clickHandler={() => handleCommenting(false)} styling='mr-4' />
                    </span>
                    <CardButton icon={BookmarkIcon} clickHandler={handleBookmarkClick} selected={bookmarked}/>
                </div>
                <div className="mx-4 mt-4 flex">
                    <ProfileImage size="xs" imageUrl={props.owner.profilePic} onClick={() => {}}/>
                    <Text text={`${props.owner.username} - `} semibold inline additionalStyles="ml-3"/>
                    &nbsp;
                    <Text text={` ${props.owner.rank}`} semibold additionalStyles='text-darkGreen' />
                </div>
                <div className="mx-4 mt-3">
                    <Rating rating={props.rating} disableClick={true} detailed />
                </div>
                <div className="mx-4 mt-2">
                    <ReviewDispCard message={props.review || ''} />
                </div>
                {expanded && comments.length > 0 && <div className="ml-8 mr-4 pt-2">
                    {comments.map((comment, ix) => <CommentCard key={`${ix}${comment.owner.username}`} username={comment.owner.username} message={comment.message} id={comment.id} />)}
                </div>}
            </div>
            <div className="flex flex-col justify-end mt-4 mx-4">
                {commenting && (<form onSubmit={handleCommentSubmit}>
                    <input value={commentMessage} onChange={handleCommentChange} className='w-full font-primary text-lg font-semibold leading-6 placeholder-black outline-none focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder-white' type='text' name='message' placeholder='Type your message here' autoComplete="off"/>
                </form>)}
                <div className="flex justify-between">
                    <span>
                        <button hidden={comments.length === 0} className="py-2" onClick={() => {setExpanded(!expanded)}}><Text semibold text={expanded ? "Colapse Comments" : `View ${comments.length} Comment${comments.length > 1 ? 's' : ''}`} /> </button>
                    </span>
                    <button hidden={(!expanded && !commenting)} className="p-2" onClick={() => handleCommenting()}><Text semibold text={commenting ? "Submit Comment" : "Add Comment"} /> </button>
                </div>
            </div>
        </div>
    )
}

export default StrainCard
