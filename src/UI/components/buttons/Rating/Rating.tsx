import React from "react"
import RatingStarIcon from "../../icons/RatingStarIcon"
import Text from "../../typography/Text/Text";

export interface IRatingProps {
    rating: number;
    disableClick?: boolean;
    detailed?: boolean;
    onSelect?: (selection: any) => void;
}

export const Rating = (props: IRatingProps) => {
    const [stars, setStars] = React.useState<string[]>([])
    const [selectedStars, setSelectedStars] = React.useState<string[]>([])
    const [rating, setRating] = React.useState(props.rating)

    React.useEffect(() => {
        if (props.rating) setRating(props.rating)
    }, [props.rating])

    React.useEffect(() => {
        const emptyStars: string[] = [];
        const filledStars: string[] = [];
        for(let i = 0; i < rating; i++){
            filledStars.push("star");
        }
        for(let j = 0; j < 5 - rating; j++){
            emptyStars.push("star");
        }
        setSelectedStars(filledStars)
        setStars(emptyStars)
    }, [rating])

    const handleClick = (selected, ix) => {
        if (!props.disableClick) {
            let newRating;
            if(selected) newRating = (ix + 1)
            else newRating = (ix + selectedStars.length + 1)
            setRating(newRating)
            props.onSelect && props.onSelect(newRating)
        }
    }
    
    return (
        <span className="flex">
            {selectedStars.map((star, ix) => <div key={'filledStar' + ix} onClick={() => handleClick(true, ix)}><RatingStarIcon selected={true} /></div>)}
            {stars.map((star, ix) => <div key={'Star' + ix} onClick={() => handleClick(false, ix)}><RatingStarIcon selected={false} /></div>)}
            &nbsp;
            {props.detailed && <Text text={` - ${props.rating}/5`} bold />}
        </span>
    )
}

export default Rating