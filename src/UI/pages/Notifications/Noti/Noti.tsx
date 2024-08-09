import Text from '../../../components/typography/Text/Text'

interface INotiProps {
    message: string;
    recieved: Date;
}

export const Noti = (props: INotiProps) => {
    return (<div className="flex flex-col justify-center h-12 w-full p-2 mb-2">
        <Text text={props.message} />
        <Text size='sm' text={`recieved: ${props.recieved.toLocaleDateString()} ${props.recieved.toLocaleTimeString()}`} />
    </div>)
}

export default Noti