import SubHeading from '../../typography/SubHeading/SubHeading';
import ContentPanel from './ContentPanel/ContentPanel'
import Text from "../../typography/Text/Text"

interface IContentCardProps {
    name: string;
    description?: string;
    icon: any;
    onSeeAll?: (name: string) => void;
    contentIcons?: any[];
    contentImages?: any[];
    see?: string;
}

export const ContentCard = (props: IContentCardProps) => {
    const Icon = props.icon;
    return (
        <div className='h-36 md:h-44 flex flex-col pt-4'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row ml-4 md:ml-6'>
                    <Icon selected={true} styling='h-6 w-6 sm:h-9 sm:w-9'/>
                    <div className='ml-3 h-11'>
                        <SubHeading text={props.name} />
                        <Text text={props.description || ''} />
                    </div>
                </div>
                {props.onSeeAll && <span className='mr-5 sm:mr-9 cursor-pointer' onClick={() => props.onSeeAll && props.onSeeAll(props.name)}><Text text={props.see ? `SEE ${props.see.toUpperCase()}` : 'SEE ALL'} semibold /></span>}
            </div>
            <div className='h-full flex mx-6 mt-4'>
                <div className='flex w-full justify-between items-start h-full'>
                    {props.contentIcons
                        ? props.contentIcons?.map((badge, ix) => <ContentPanel key={'badge ' + ix} icon={badge} />)
                        : props.contentImages?.map((image, ix) => <ContentPanel key={'badge ' + ix} imageSrc={image} />)}
                </div>
            </div>
        </div>
    )
}

export default ContentCard