interface IContentPanel {
    icon?: any;
    imageSrc?: string;
}

export const ContentPanel = (props) => {
    let Icon, Image;
    if (props?.icon) {
        Icon = props.icon;
    }
    if (props?.imageSrc) {
        Image = props.imageSrc;
    }

    return !Icon
        ? <img className='h-9 w-9' src={Image} alt='Content Image' />
        : <div className='flex justify-center items-center'>
            <Icon selected={true} styling='h-9 w-9'/>
        </div>
}

export default ContentPanel