import React from 'react';
import Text from '../../typography/Text/Text'

interface ICommentCardProps {
    message: string;
}

const truncate = (message: string) => message?.length > 135 ? message.substring(0, 135).trim() + "..." : message;

export const ReviewDispCard = (props: ICommentCardProps) => {
    const [trunc, setTrunc] = React.useState(true);
    const truncate = React.useCallback(() => props.message?.length > 135 ? props.message.substring(0, 135).trim() + "..." : props.message, [props.message])
    const tMes = React.useMemo(() => truncate(), [truncate]);
    const toggleTrunc = (e) => {
        e.preventDefault();
        setTrunc(!trunc);
    }
    return (
        <div>
            <Text inline text={trunc ? tMes : props.message} />
            {props.message?.length > 135 && <a className="ml-2" onClick={toggleTrunc} href="#">{trunc ? 'expand' : 'collapse'}</a>}
        </div>
    )
}

export default ReviewDispCard;