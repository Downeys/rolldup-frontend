import React from "react"
import ActionButton from "../buttons/ActionButton/ActionButton"

interface IEditFieldProps {
    name: string;
    value?: string;
    type?: 'text' | 'date' | 'email';
    onSave: (value: any) => void;
}

export const EditField = (props: IEditFieldProps) => {
    const [value, setValue] = React.useState(props.value)

    const handleClick = () => {
        props.onSave({ [props.name]: value } || {})
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="flex flex-row h-12 w-full justify-between dark:bg-slate-800">
            <input className="border-none outline-none focus:outline-none leading-5 font-primary dark:bg-slate-800 dark:text-white w-full text-right"
                type={props.type || 'text'}
                placeholder={props.type !== 'date' ? props.name : ''}
                value={value}
                onChange={handleChange} />
            <ActionButton appearance={'primary'} text={'Save'} additionalStyles="m-1 w-16 mr-4" onClick={handleClick}/>
        </div>
    )
}

export default EditField
