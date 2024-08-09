import React from 'react';
import FeedbackApi from '../../../../apis/FeedbackApi';
import { UserAccountInfo } from '../../../../utils/providers/AccountProvider';
import OptionsButton from '../../buttons/OptionsButton/OptionsButton';
import ErrorIcon from '../../icons/ErrorIcon';
import ModalWrapper from '../../modals/ModalWrapper';
import ToastModal from '../../modals/ToastModal/ToastModal';
import Text from '../../typography/Text/Text'
import ReviewDispCard from '../ReviewDispCard/ReviewDispCard';

interface ICommentCardProps {
    id: number;
    username: string;
    message: string;
}

export const CommentCard = (props: ICommentCardProps) => {
    const acctContext = React.useContext(UserAccountInfo);
    const [showModal, setShowModal] = React.useState(false);

    const handleReportContent = async () => {
        if (acctContext.authStatus === 'LoggedIn') {
            try {
                await FeedbackApi.reportContent(props.id, 'comment');
                setShowModal(true);
            } catch(e) {
                console.log(e);
            }
            
        }
    }

    const menuOptions = React.useMemo(() => ([
        { name: 'Report', icon: ErrorIcon, onClick: handleReportContent }
    ]), [])

    return (
        <div className='flex flex-col'>
            <ModalWrapper showModal={showModal} onCancel={() => {}} ><ToastModal message="Thank you for your feedback. This content has been reported to the administrators." onClose={() => setShowModal(false)} /></ModalWrapper>
            <div className='flex flex-row justify-between mt-2'>
                <Text semibold text={props.username} />
                <OptionsButton options={menuOptions} />
            </div>
            <ReviewDispCard message={props.message} />
        </div>
    )
}

export default CommentCard;