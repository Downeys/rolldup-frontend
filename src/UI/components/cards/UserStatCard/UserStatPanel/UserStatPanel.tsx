import Text from "../../../typography/Text/Text";

interface IUserStatPanelProps {
    statName: string;
    statIcon: any;
    stat: number;
}

export const UserStatPanel = (props: IUserStatPanelProps) => {
    const Icon = props.statIcon
    return (
        <div className='flex flex-col items-center w-1/3'>
            <Text semibold text={props.statName} />
            <Icon styling='h-9 w-9 my-1' selected={true}/>
            <Text semibold text={props.stat ? `${props.stat}` : ' '} />
        </div>
    )
}

export default UserStatPanel