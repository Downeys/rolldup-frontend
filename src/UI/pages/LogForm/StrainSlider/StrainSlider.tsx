import React from 'react'
import SubHeading from '../../../components/typography/SubHeading/SubHeading'
import LogFormContext, { LogFormDispatch } from '../LogFormContext/LogFormContext'
import { LogFormActionType } from '../LogFormContext/LogFormActionType.enum'

export const StrainSlider = () => {
    const { strainIndex } = React.useContext(LogFormContext);
    const dispatch = React.useContext(LogFormDispatch);

    const handleSliderClick = () => dispatch({ type: LogFormActionType.CHANGE_FOCUS_ELEMENT, payload: { elementName: 'StrainPercentage' } })
    const handleSliderSlide = (e) => dispatch({ type: LogFormActionType.UPDATE_STRAIN_INDEX, payload: { strainIndex: +e.target.value } })
    
    return (
        <div className="mt-4 pb-2 px-4 border border-grey rounded flex flex-col dark:bg-slate-800" onClick={handleSliderClick}>
            <input className="mt-1 color-texasGreen m-0 dark:bg-slate-800" type='range' min={1} max={5} onChange={handleSliderSlide}  value={strainIndex} />
            <div className="flex flex-row justify-between" >
                <SubHeading text="Indica" />
                <SubHeading text="Hybrid" />
                <SubHeading text="Sativa" />
            </div>          
        </div>
    )
}

export default StrainSlider