import { levelsToDisplay } from "../../BadgePreview/BadgePreview";
import ActionButton from "../../buttons/ActionButton/ActionButton"
import Heading from "../../typography/Heading/Heading";
import Text from "../../typography/Text/Text"

interface IBadgeNotificationModalProps {
    message: string;
    label: string;
    level: string;
    onClose: () => void;
}

export const BadgeNotificationModal = (props: IBadgeNotificationModalProps) => {
    return (
        <div className="z-40 h-72 w-72 border border-transparent rounded-2xl bg-white flex flex-col justify-center items-center dark:bg-slate-800 p-3">
            <Heading size='2xl' text={props.message} additionalStyles="w-40 mb-4 text-center"/>
            <Text size='2xl' text={props.label} additionalStyles="text-center"/>
            <Text text={levelsToDisplay[props.level]} additionalStyles="mb-14 text-center"/>
            <ActionButton text="Sweet" appearance="primary" additionalStyles="w-28 uppercase" onClick={props.onClose} />            
        </div>
    )
}

export default BadgeNotificationModal;
