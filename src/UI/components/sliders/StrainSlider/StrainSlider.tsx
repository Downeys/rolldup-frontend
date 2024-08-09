import { ChangeEventHandler } from "react";
import SubHeading from "../../typography/SubHeading/SubHeading";

interface IThcSliderProps {
    slideHandler: (sativaLvl: any) => void;
    strainPercentage: number;
    takeFocus: (formItem: string) => void;
}

export const StrainSlider = (props: IThcSliderProps) => {

    return (
        <div className="mt-4 pb-2 px-4 border border-grey rounded flex flex-col dark:bg-slate-800" onClick={() => props.takeFocus('StrainPercentage')}>
            <input className="mt-1 color-texasGreen m-0 dark:bg-slate-800" type='range' min={1} max={5} onChange={(e) => props.slideHandler(+e.target.value)}  value={props.strainPercentage} />
            <div className="flex flex-row justify-between" >
                <SubHeading text="Indica" />
                <SubHeading text="Hybrid" />
                <SubHeading text="Sativa" />
            </div>          
        </div>
    )
}

export default StrainSlider