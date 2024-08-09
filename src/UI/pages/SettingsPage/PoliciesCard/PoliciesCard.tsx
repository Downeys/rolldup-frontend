import ActionButton from "../../../components/buttons/ActionButton/ActionButton"

export interface IPoliciesCardProps {
    onTermsClick: () => void;
    onPrivacyClick: () => void;
}

export const PoliciesCard = (props: IPoliciesCardProps) => (
    <div className="h-16 flex flex-row items-center justify-evenly">
        <ActionButton text='Privacy Policy' appearance='primary' additionalStyles="ml-4" onClick={props.onPrivacyClick} />
        <ActionButton text='Terms of Service' appearance='primary' additionalStyles="mx-4" onClick={props.onTermsClick} />
    </div>)

export default PoliciesCard