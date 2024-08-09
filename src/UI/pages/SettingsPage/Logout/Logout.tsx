import React from "react";
import { UserAccountInfo } from "../../../../utils/providers/AccountProvider";
import ActionButton from "../../../components/buttons/ActionButton/ActionButton"

export const Logout = () => {
    const { logUserOut } = React.useContext(UserAccountInfo);
    return (
        <div className="flex justify-center pt-2">
            <ActionButton appearance="tertiary" text="Log Out" onClick={logUserOut}/>
        </div>
    )
}

export default Logout