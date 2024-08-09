import CardButton from "../../buttons/CardButton/CardButton"
import HeartIcon from "../../icons/HeartIcon"
import Rating from "../../buttons/Rating/Rating"
import React from "react"
import Text from "../../typography/Text/Text"
import StrainLogApi from "../../../../apis/StrainLogApi"

interface IStrainCardProps {
    id: number;
    pictureUrl: string;
    owner: any;
    strain: any;
    review?: string;
    rating: number;
    isFavorited: boolean;
}

export const StrainCardCondensed = (props: IStrainCardProps) => {
    const [favorite, setFavorite] = React.useState(props.isFavorited)

    const handleHeartClick = async () => { 
        if (favorite) {
            await StrainLogApi.addFavorite(props.owner.username, props.id)
        } else {
            await StrainLogApi.removeFavorite(props.id)
        }
        setFavorite(!favorite);
    }

    return (
        <div className="flex bg-white w-full border">
            <div className="bg-transparent p-4">
                <img src={props.pictureUrl} alt="strain pic" className="h-20 w-20" />
            </div>
            <div className="flex flex-col justify-between w-full py-4">
                <div>
                    <Text semibold text={props.strain?.name + " - " + props.strain?.strain} />
                    <div className="mt-2">
                        <Text text={props.owner?.username + " says:"} />
                        <Text text={props.review || ''} />
                    </div>
                </div>
                <div className=" flex flex-row justify-end">
                    <Rating rating={props.rating} />
                    <CardButton icon={HeartIcon} clickHandler={handleHeartClick} styling='mx-6' selected={favorite} />
                </div>
            </div>
        </div>
    )
}

export default StrainCardCondensed