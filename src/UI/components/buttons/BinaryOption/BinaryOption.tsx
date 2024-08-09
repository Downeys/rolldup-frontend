import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import RadioButton from "../RadioButton/RadioButton"

interface IBinaryOptionProps{
    name: string;
    option1: string;
    option2: string;
    appearance?: 'primary' | 'secondary' | 'tertiary'
    selection?: string;
    type?: 'radio' | 'button';
    onSave: (selection: any) => void;
    onChange?: (selection: string) => void;
}

const ButtonOptions = (props: IBinaryOptionProps) => {
    return (
        <div className="h-12 flex flex-row items-center justify-end">
            <ActionButton text={props.option1} appearance={props.appearance || 'tertiary'} additionalStyles="w-36"/>
            <ActionButton text={props.option2} appearance={props.appearance || 'tertiary'} additionalStyles="w-36 mx-6"/>
        </div>
    )
}

const RadioOptions = (props: IBinaryOptionProps) => {
    const [selection, setSelection] = React.useState(props.selection || '')

    React.useEffect(() => {
        if(props.selection) setSelection(props.selection.toLowerCase())
    }, [props.selection])

    const handleClick = () => {
        props.onSave({ [props.name]: selection })
    }

    const handleChange = (e) => {
        setSelection(e.target.id.toLowerCase())
        if(props.onChange) props.onChange(e.target.id.toLowerCase())
    }
    
    return (
        <div className="h-12 flex flex-row items-center justify-between px-4">
            <RadioButton isSelected={selection === props.option1.toLowerCase()} group={`${props.option1}${props.option2}`} label={props.option1} onChange={handleChange} />
            <RadioButton isSelected={selection === props.option2.toLowerCase()} group={`${props.option1}${props.option2}`} label={props.option2} onChange={handleChange} />
            <ActionButton appearance={'primary'} text={'Save'} additionalStyles="m-1 w-16" onClick={handleClick}/>
        </div>
    )
}

export const BinaryOption = (props: IBinaryOptionProps) => {
    const options = {
        radio: RadioOptions,
        button: ButtonOptions
    }
    const OptionsComponent = options[props.type || 'radio']
    return <OptionsComponent {...props} />
}

export default BinaryOption