import React from "react";
import ActionButton from "../../../../components/buttons/ActionButton/ActionButton";
import { Dropdown } from "../../../../components/buttons/Dropdown/Dropdown";

interface IUpdatePronounProps {
    pronouns: string;
    onSave: (pronouns: any) => void;
}

export const UpdatePronouns = (props: IUpdatePronounProps) => {
    const [pronouns, setPronouns] = React.useState(props.pronouns || "None")
    const [isEditable, setIsEditable] = React.useState(false)

    const handleFocus = () => {
        setIsEditable(true)
    }

    const handleSave = () => {
        props.onSave({ Pronouns: pronouns })
        
    }

    const handleSelect = (selection: any) => {
        setPronouns(selection)
        setIsEditable(false)
    }

    const PRONOUN_OPTIONS = [
        { name: "He/Him" },
        { name: "She/Her" },  
        { name: "They/Them" },
        { name: "Ze/Hir" },
        { name: "None" },
    ]

    return (
        <div className="flex p-2">
            <Dropdown title="Pronouns" menuItems={PRONOUN_OPTIONS} selected={pronouns} hasFocus={isEditable} takeFocus={handleFocus} onSelect={handleSelect}  />
            <ActionButton appearance="primary" text="Save" onClick={handleSave} additionalStyles="h-12 w-36 mx-4" />
        </div>
    )
}

export default UpdatePronouns
