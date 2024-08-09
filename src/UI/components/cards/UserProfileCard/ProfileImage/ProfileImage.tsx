import React from "react";
import Face from "../../../Face/Face";
import EditIcon from "../../../icons/EditIcon"
import UserIcon from "../../../icons/UserIcon"

interface IProfileImageProps {
    imageUrl?: string;
    size: 'xs' | 'sm' | 'md';
    editable?: boolean;
    onClick: () => void;
}

export const ProfileImage = (props: IProfileImageProps) => {
    const size = React.useMemo(() => {
        const sizes = {
            'xs': 'h-6 w-6 m-w-6',
            'sm': 'h-9 w-9 m-w-9',
            'md': 'h-20 w-20 m-w-20',
        }
        return sizes[props.size];
    }, [props.size])

    return (
        <div className={`${size} border-0 rounded-full bg-white`}>
            <div className='h-full w-full flex justify-center items-center'>
                {props.imageUrl ? <img src={props.imageUrl} alt="profile pic" className="mask mask-circle" /> : <Face styling={size} />}
            </div>
            {props.editable && <div className="relative -top-1/4 left-3/4">
                <EditIcon onClick={props.onClick}/>
            </div>}
        </div>
    )
}

export default ProfileImage