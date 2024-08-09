import React from "react";
import ActionButton from "../../../components/buttons/ActionButton/ActionButton"

interface ISettingsEmailCardProps {
    message: string;
    submit: (message: string) => {};
}

export const SettingsEmailCard = (props: ISettingsEmailCardProps) => {
    const [message, setMessage] = React.useState('')

    const handleClick = () => {
        props.submit(message);
        setMessage('')
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className="flex flex-col px-6 py-4">
            <p className="font-primary leading-5">{props.message}</p>
            <textarea
            name="review"
            className="h-36 w-full mb-1 border-none outline-none focus:outline-none dark:bg-slate-800 dark:text-white dark:border dark:border-white"
            value={message}
            onChange={handleChange}/>
            <div className="flex flex-row w-full justify-center">
                <ActionButton appearance={'primary'} text={'Submit'} onClick={handleClick} />
            </div>
        </div>
    )
}

export default SettingsEmailCard
