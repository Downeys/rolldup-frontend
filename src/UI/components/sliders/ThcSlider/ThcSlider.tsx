import React from "react";
import ToggleWContent from "../../buttons/ToggleWContent/ToggleWContent";
import SubHeading from "../../typography/SubHeading/SubHeading";

interface IThcSliderProps {
    slideHandler: (thc: any) => void;
    cannibinoid: string;
    percentage: number;
    mgs: number;
    mode: 'pct' | 'mgs' | 'none';
    takeFocus: (formItem: string) => void;
    onCannibinoidChange: (update: string) => void;
}

export const ThcSlider = (props: IThcSliderProps) => {
    const mode = props.mode;
    const mgs = props.mgs;
    const percentage = props.percentage;
    const [cannibinoid, setCannibinoid] = React.useState(props.cannibinoid || 'THC')
    const toggleIsOn = React.useMemo(() => cannibinoid==='THC', [cannibinoid])
    const [sliderVisible, setSliderVisible] = React.useState(window.innerWidth >= 300)
    const [modeIndicator, modeMultiplier, output] = React.useMemo(() => {
        if (mode === 'pct') return ["%", 1, percentage];
        if (mode === 'mgs') return ["mgs", 5, mgs];
        return ["", 1, ""]
    }, [[mode, percentage, mgs]])

    const handleToggleCannibinoid = () => {
        const update = cannibinoid === 'THC' ? "CBD" : "THC"
        setCannibinoid(update);
        props.onCannibinoidChange(update)
    }

    const handleSlider = (e) => {
        const updatedValue = e.target.value === "" ? 0 : +e.target.value
        if (props.mode === 'pct') props.slideHandler({ percentage: updatedValue })
        if (props.mode === 'mgs') props.slideHandler({ mgs: updatedValue })
    }

    React.useEffect(() => {
        const handleResize = () => {
            if (!sliderVisible && window.innerWidth >= 300) setSliderVisible(true);
            if (sliderVisible && window.innerWidth < 300) setSliderVisible(false);

        }
        window.addEventListener('resize', handleResize)
    })

    return ( 
        <div className="mt-4 h-20 mt-4 px-4 border border-grey rounded flex flex-row items-center dark:bg-slate-800" onClick={() => props.takeFocus('Rating')}>
            <ToggleWContent content={["THC", "CBD"]} isOn={toggleIsOn} onToggle={handleToggleCannibinoid} />
            {props.mode !== 'none' &&
                <>
                    <span className="mx-2 w-32"><SubHeading text={`${cannibinoid} ${modeIndicator}`} /></span>
                    {sliderVisible && <input className="color-texasGreen dark:bg-slate-800" type='range' min={0} max={100 * modeMultiplier} value={output} onChange={handleSlider} />}
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