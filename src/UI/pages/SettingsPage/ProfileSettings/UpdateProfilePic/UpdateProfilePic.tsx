import React from "react";
import { UserAccountInfo } from "../../../../../utils/providers/AccountProvider";
import ActionButton from "../../../../components/buttons/ActionButton/ActionButton";
import BinaryOption from "../../../../components/buttons/BinaryOption/BinaryOption"
import UserIcon from "../../../../components/icons/UserIcon";

interface IUpdateProfilePicProps {
    onSave: (selection: any) => void;
    value: string;
}

export const UpdateProfilePic = (props: IUpdateProfilePicProps) => {
    const acctContext = React.useContext(UserAccountInfo);
    const profileImageUrl = React.useMemo(() => acctContext.user.profilePic, [acctContext.user.profilePic])
    return (
        <div className="flex flex-col items-center m-2">
            {profileImageUrl 
                ? <img src={profileImageUrl} alt="profile pic" className="h-32 w-32 mt-1 mb-3 border rounded-full border-dollar" />
                : <div className="h-32 w-32 my-3 flex justify-center items-center border rounded-full border-dollar dark:bg-white">
                    <UserIcon styling="h-10 w-10 \" />
                </div>}
            <ActionButton appearance="tertiary" text="Change Profile Image" onClick={props.onSave} />
        </div>
    )
}

export default UpdateProfilePic