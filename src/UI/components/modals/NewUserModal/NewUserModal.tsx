import React from "react";
import ActionButton from "../../buttons/ActionButton/ActionButton"
import Heading from "../../typography/Heading/Heading";
import Text from "../../typography/Text/Text";

interface IEndorsementsModalProps {
    onDecline: () => void;
    onAccept: () => void;
}

export const NewUserModal = (props: IEndorsementsModalProps) => {
    return (
        <div className="z-40 h-72 w-72 border border-transparent rounded-2xl bg-white flex flex-col justify-center items-center dark:bg-slate-800 p-3">
            <Heading size='2xl' text='Do you want to set up your profile?' additionalStyles="mb-28 text-center"/>
            <div className="flex">
                <ActionButton text="No" appearance="tertiary" additionalStyles="w-28 mr-4" onClick={props.onDecline}/>
                <ActionButton text="Yes" appearance="primary" additionalStyles="w-28" onClick={props.onAccept} />
            </div>
            
        </div>
    )
}

export default NewUserModal