import React from "react";
import SubHeading from "../../../components/typography/SubHeading/SubHeading"
import LogFormContext, { LogFormDispatch } from "../LogFormContext/LogFormContext"
import { LogFormActionType } from "../LogFormContext/LogFormActionType.enum";

export const ReviewCard = () => {
    const { review } = React.useContext(LogFormContext);
    const dispatch = React.useContext(LogFormDispatch);

    const handleFocus = () => dispatch({ type: LogFormActionType.CHANGE_FOCUS_ELEMENT, payload: { elementName: 'Review' } })
    const handleChange = (e) => dispatch({ type: LogFormActionType.UPDATE_REVIEW, payload: { review: e.target.value } })

    return (
        <div className="mt-4 h-36 border border-grey rounded flex flex-col pl-4 pr-3 dark:bg-slate-800">
            <SubHeading text="Write a review" />
            <textarea
                value={review || ''}
                name="review"
                onChange={handleChange}
                onFocus={handleFocus}
                className="h-full w-full mb-1 outline-none focus:outline-none border-none dark:bg-slate-800 dark:text-white">
            </textarea>
        </div>
    )
}

export default ReviewCard