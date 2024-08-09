import ActionButton from "../../buttons/ActionButton/ActionButton"
import Heading from "../../typography/Heading/Heading";

interface IRankUpModalProps {
    message: string;
    rank: string;
    onClose: () => void;
}

export const RankUpModal = (props: IRankUpModalProps) => {
    return (
        <div className="z-40 h-72 w-72 border border-transparent rounded-2xl bg-white flex flex-col justify-center items-center dark:bg-slate-800 p-3">
            <Heading size='2xl' text={props.message} additionalStyles="mb-4 text-center"/>
            <Heading text="NEW RANK" additionalStyles="mb-2 text-center"/>
            <Heading size='2xl' text={props.rank} additionalStyles="mb-14 text-center"/>
            <ActionButton text="Righteous" appearance="primary" additionalStyles="w-28" onClick={props.onClose} />            
        </div>
    )
}

export default RankUpModal