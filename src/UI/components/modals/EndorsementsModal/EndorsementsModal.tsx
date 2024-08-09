import React from "react";
import ActionButton from "../../buttons/ActionButton/ActionButton"
import Heading from "../../typography/Heading/Heading";
import Text from "../../typography/Text/Text";

interface IEndorsementsModalProps {
    onDecline: () => void;
    onAccept: () => void;
    onTermsClick: () => void;
    onPrivacyClick: () => void;
}

export const EndorsementsModal = (props: IEndorsementsModalProps) => {
    const [acceptDisabled, setAcceptDisabled] = React.useState(true)

    const handleCheckboxClick = (e) => setAcceptDisabled(!e.target.checked)

    return (
        <div className="z-40 h-72 w-72 border border-transparent rounded-2xl bg-white flex flex-col justify-center items-center dark:bg-slate-800">
            <Heading size='2xl' text='Are you 21 or older?' additionalStyles="mb-8"/>
            <div className="flex mb-12">
                <div className="ml-5 mr-3">
                    <input type='checkbox' onChange={handleCheckboxClick} className="cursor-pointer"/>
                </div>
                <div>
                    <Text size="lg" text="Check here to agree to our " additionalStyles="inline" />
                    <span onClick={props.onTermsClick}><Text size="lg" text="terms of service" additionalStyles="inline text-dollar dark:text-dollar cursor-pointer" /></span>
                    <Text size="lg" text=" and " additionalStyles="inline" />
                    <span onClick={props.onPrivacyClick}><Text size="lg" text="privacy policy" additionalStyles="inline text-dollar dark:text-dollar cursor-pointer" /></span>
                </div>
            </div>
            <div className="flex">
                <ActionButton text="No" appearance="tertiary" additionalStyles="w-28 mr-4" onClick={props.onDecline}/>
                <ActionButton text="Yes" appearance="primary" additionalStyles="w-28" onClick={props.onAccept} disabled={acceptDisabled} />
            </div>
            
        </div>
    )
}

export default EndorsementsModal
