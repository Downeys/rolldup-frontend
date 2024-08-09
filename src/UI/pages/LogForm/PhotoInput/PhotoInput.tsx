import React from 'react';
import SubHeading from '../../../components/typography/SubHeading/SubHeading';
import Text from '../../../components/typography/Text/Text';
import CameraIcon from '../../../components/icons/CameraIcon';
import LogFormContext from '../LogFormContext/LogFormContext';
import { UserAccountInfo } from '../../../../utils/providers/AccountProvider';

export const PhotoInput  = () => {
    const { user } = React.useContext(UserAccountInfo);
    const { strainName, logMode, pic } = React.useContext(LogFormContext);

    const ref = React.useRef<HTMLInputElement>(null);
    const [state, setState] = React.useState({
        fileName: logMode === 'edit' ? 'Update Picture (optional)' : ''
    })

    const handlePhotoClick = React.useCallback(() => {
        ref.current && ref.current?.click();
    }, [ref])

    const setImageFile = React.useCallback(() => {
        if (ref.current?.files) {
            const file = ref.current.files[0];
            const fileName = strainName?.length ? `${strainName}-img` : `${user.username}-img`;
            pic.append("file", file);
            setState({ ...state, fileName })
        }
    }, [ref, strainName, pic, user, state])

    return (
        <div className="mt-4 h-12 border border-grey rounded flex flex-row items-center justify-between pl-4 pr-3 dark:bg-slate-800 "
            key="log-photo"
            onClick={handlePhotoClick}>
            <input ref={ref} onChange={setImageFile} type='file' accept="image/x-png,image/gif,image/jpeg" hidden/>
            <SubHeading text="Photo" />
            <span className="w-full flex justify-end">
                <Text text={state.fileName} semibold additionalStyles="mr-4"/>
                <CameraIcon selected={true} />
            </span>
        </div>
    )
}

export default PhotoInput