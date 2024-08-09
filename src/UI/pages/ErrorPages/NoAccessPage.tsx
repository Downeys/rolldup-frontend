import React from "react";
import { useNavWrapper } from "../../../utils/navigate-wrapper/useNavWrapper";
import ActionButton from "../../components/buttons/ActionButton/ActionButton";
import Heading from "../../components/typography/Heading/Heading";
import Text from "../../components/typography/Text/Text";

export const NoAccessPage = () => {
    const nav = useNavWrapper();
    const handleButtonClick = React.useCallback(() => {
        nav('/');
    }, [nav])
    return (
        <div className="w-screen h-screen dark:bg-slate-800 flex flex-col items-center justify-center">
            <Heading text="Don't be shady" additionalStyles="mb-2"/>
            <Text
                text="You're not authorized to be here. Please enjoy the rest of the app." 
                additionalStyles="text-center"
            />
            <div className="flex justify-between p-6">
                <ActionButton text="Home Feed" appearance="primary" onClick={handleButtonClick}/>
            </div>
        </div>
    )
}

export default NoAccessPage;