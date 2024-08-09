import SubHeading from '../../../components/typography/SubHeading/SubHeading'
import Text from '../../../components/typography/Text/Text'
import LeftChevronIcon from '../../../components/icons/LeftChevronIcon'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import React from 'react';
import SearchResult from '../../../components/cards/SearchResult/SearchResult'

interface ISocialDrillDownProps {
    name: string;
    icon: any;
    query: any;
    onClose: () => void;
}

export const SocialDrillDown = (props: ISocialDrillDownProps) => {
    const [day, setDay] = React.useState([] as any[]);
    const [week, setWeek] = React.useState([] as any[]);
    const [ever, setEver] = React.useState([] as any[]);

    React.useEffect(() => {
        ( async () => {
            const users = await props.query();
            setDay(users);
            setWeek(users);
            setEver(users);
        })()
    }, [])

    const Icon = props.icon;

    return (
        <div className='flex flex-col h-screen'>
            <div className="flex justify-between w-full h-18 px-4">
                <div className="flex h-full items-center">
                    <Icon styling='h-9 w-9' selected />
                    <SubHeading text={props.name} additionalStyles='ml-2' />
                </div>
                <div className='flex items-center' onClick={props.onClose}>
                    <LeftChevronIcon />
                    <Text semibold text='BACK' />
                </div>
            </div>
            <SectionHeader label='Top Users Today' />
            {/* {day.length > 0 && day.map(user => (<SearchResult type="user" label={user.username} onClick={() => {}} />))} */}
            <SectionHeader label='Top Users This Week' />
            {/* {week.length > 0 && week.map(user => (<SearchResult type="user" label={user.username} onClick={() => {}} />))} */}
            <SectionHeader label='Top Users of All Time' />
            {/* {ever.length > 0 && ever.map(user => (<SearchResult type="user" label={user.username} onClick={() => {}} />))} */}
        </div>
    )
}

export default SocialDrillDown;