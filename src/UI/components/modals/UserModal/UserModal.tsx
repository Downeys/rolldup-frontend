import ActionButton from "../../buttons/ActionButton/ActionButton"
import UserIcon from "../../icons/UserIcon";
import SubHeading from "../../typography/SubHeading/SubHeading";

interface IPictureModalProps {
    onClick: () => void;
    type: 'add' | 'remove';
    user: any;
}

export const PictureModal = (props: IPictureModalProps) => {
    return (
        <div className="z-40 h-72 w-72 border border-transparent rounded-2xl bg-white flex flex-col justify-center items-center">
            <div className="h-20 w-20 flex justify-center items-center border rounded-full border-dollar"><UserIcon styling="h-10 w-10" selected={true} /></div>
            <SubHeading text={props.user.name} additionalStyles='mt-3' />
            {props.type === 'add' && <ActionButton text="ADD" appearance="primary" additionalStyles="w-40 mt-2" onClick={props.onClick}/>}
            {props.type === 'remove' && <ActionButton text="REMOVE" appearance="tertiary" additionalStyles="w-40 mt-4" onClick={props.onClick}/>}
        </div>
    )
}

export default PictureModal