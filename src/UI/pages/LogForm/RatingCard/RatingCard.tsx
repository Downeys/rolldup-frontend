import React from 'react'
import SubHeading from '../../../components/typography/SubHeading/SubHeading'
import Rating from '../../../components/buttons/Rating/Rating'
import LogFormContext, { LogFormDispatch } from '../LogFormContext/LogFormContext'
import { LogFormActionType } from '../LogFormContext/LogFormActionType.enum'

export const RatingCard = () => {
    const { rating } = React.useContext(LogFormContext);
    const dispatch = React.useContext(LogFormDispatch);
    
    const handleRatingClick = () => dispatch({ type: LogFormActionType.CHANGE_FOCUS_ELEMENT, payload: { elementName: 'Rating'} })
    const handleRatingSelect = (newRating: number) => dispatch({ type: LogFormActionType.UPDATE_RATING, payload: { rating: newRating } })

    return (
        <div className="mt-4 h-12 border border-grey rounded flex flex-row items-center justify-between pl-4 pr-3 dark:bg-slate-800"
            onClick={handleRatingClick}
            key="log-rating">
            <SubHeading text="Rate" />
            <Rating rating={rating} onSelect={handleRatingSelect} />
        </div>
    )
}

export default RatingCard