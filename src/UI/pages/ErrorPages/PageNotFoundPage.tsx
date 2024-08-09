import React from "react";
import { useNavWrapper } from "../../../utils/navigate-wrapper/useNavWrapper";
import { UserAccountInfo } from "../../../utils/providers/AccountProvider";
import ActionButton from "../../components/buttons/ActionButton/ActionButton";
import Heading from "../../components/typography/Heading/Heading";
import Text from "../../components/typography/Text/Text";

export const PageNotFound = () => {
    const nav = useNavWrapper();
    const handleButtonClick = React.useCallback(() => {
        nav('/');
    }, [nav])
    return (
        <div className="w-screen h-screen dark:bg-slate-800 flex flex-col items-center justify-center">
            <Heading text="That page isn't here, man" additionalStyles="mb-2" />
            <Text text="We've got what you're looking for, it's just not on this page." additionalStyles="text-center"/>
            <Text text="Please try again." additionalStyles="text-center"/>
            <div className="flex justify-between p-6">
                <ActionButton text="Home Feed" appearance="primary" onClick={handleButtonClick}/>
            </div>
        </div>
    )
}

export default PageNotFound;