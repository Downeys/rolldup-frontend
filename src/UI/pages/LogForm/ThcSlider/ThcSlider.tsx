import React from "react";
import ToggleWContent from "../../../components/buttons/ToggleWContent/ToggleWContent";
import SubHeading from "../../../components/typography/SubHeading/SubHeading";
import LogFormContext, { LogFormDispatch } from "../LogFormContext/LogFormContext";
import { LogFormActionType } from "../LogFormContext/LogFormActionType.enum";

export const ThcSlider = () => {
    const { category, mgs, percentage, cannibinoid } = React.useContext(LogFormContext);
    const dispatch = React.useContext(LogFormDispatch);

    const [state, setState] = React.useState({
        sliderVisible: window.innerWidth >= 300,
    })

    const toggleIsOn = React.useMemo(() => cannibinoid==='THC', [cannibinoid])
    const mode = React.useMemo(() => {
        if (category === 'Flower' || category === 'Concentrate' || category === 'Cartridge' || category === 'PreRoll') return 'pct';
        if (category === 'Edible') return 'mgs';
        return 'none';
    }, [category])
    const [modeIndicator, modeMultiplier, output] = React.useMemo(() => {
        if (mode === 'pct') return ["%", 1, percentage];
        if (mode === 'mgs') return ["mgs", 5, mgs];
        return ["", 1, ""]
    }, [mode, percentage, mgs])

    const handleSliderClick = () => dispatch({ type: LogFormActionType.CHANGE_FOCUS_ELEMENT, payload: { elementName: 'THC Slider' } })

    const handleToggleCannibinoid = () => {
        const update = cannibinoid === 'THC' ? "CBD" : "THC"
        dispatch({ type: LogFormActionType.UPDATE_CANNIBINOID, payload: { cannibinoid: update } })
    }

    const handleSlider = (e) => {
        const updatedValue = e.target.value === "" ? 0 : +e.target.value
        if (mode === 'pct') dispatch({ type: LogFormActionType.UPDATE_PERCENTAGE, payload: { percentage: updatedValue } })
        if (mode === 'mgs') dispatch({ type: LogFormActionType.UPDATE_MGS, payload: { mgs: updatedValue } })
    }

    React.useEffect(() => {
        const handleResize = () => {
            if (!state.sliderVisible && window.innerWidth >= 300) setState({ ...state, sliderVisible: true });
            if (state.sliderVisible && window.innerWidth < 300) setState({ ...state, sliderVisible: false });

        }
        window.addEventListener('resize', handleResize)
    })

    return ( 
        <div className="mt-4 h-20 mt-4 px-4 border border-grey rounded flex flex-row items-center dark:bg-slate-800" onClick={handleSliderClick}>
            <ToggleWContent content={["THC", "CBD"]} isOn={toggleIsOn} onToggle={handleToggleCannibinoid} />
            {mode !== 'none' &&
                <>
                    <span className="mx-2 w-32"><SubHeading text={`${cannibinoid} ${modeIndicator}`} /></span>
                    {state.sliderVisible && <input className="color-texasGreen dark:bg-slate-800" type='range' min={0} max={100 * modeMultiplier} value={output} onChange={handleSlider} />}
                    <div className="flex justify-center items-center h-14 w-24 border border-grey rounded ml-2">
                        <input className="font-primary font-semibold text-lg leading-7 dark:text-white dark:bg-slate-800 w-20 text-center"
                            value={output}
                            onChange={handleSlider}
                        />
                    </div>
                </>}               
        </div>
    )
}

export default ThcSlider