import ActionButton from "../../buttons/ActionButton/ActionButton"
import CameraIcon from "../../icons/CameraIcon"

interface IPictureModalProps {
    onClick: () => void;
}

export const PictureModal = (props: IPictureModalProps) => {
    return (
        <div className="z-40 h-72 w-72 border border-transparent rounded-2xl bg-white flex flex-col justify-center items-center">
            <CameraIcon styling="h-32 w-32" selected={true} />
            <ActionButton text="UPLOAD IMAGE" appearance="tertiary" additionalStyles="w-40 mt-2" onClick={props.onClick}/>
            <ActionButton text="TAKE PHOTO" appearance="tertiary" additionalStyles="w-40 mt-4" onClick={props.onClick}/>
        </div>
    )
}

export default PictureModal