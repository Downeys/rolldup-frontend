import React from "react";
import { UserAccountInfo } from "../../../utils/providers/AccountProvider";
import ActionButton from "../../components/buttons/ActionButton/ActionButton";
import Heading from "../../components/typography/Heading/Heading";

export const AuthErrorPage = () => {
    const { logUserOut } = React.useContext(UserAccountInfo);
    return (
        <div className="w-screen h-screen dark:bg-slate-800 flex flex-col items-center justify-center">
            <Heading text="Sorry. We were unable to log you in. Please try again." />
            <div className="flex justify-between p-6">
                <ActionButton text="Try again" appearance="primary" onClick={logUserOut}/>
            </div>
        </div>
    )
}

export default AuthErrorPage;