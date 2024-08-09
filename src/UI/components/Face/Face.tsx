import FaceImage from '../../../assets/images/face.png'

interface IFaceProps {
    styling: string;
}

export const Face = (props: IFaceProps) => {    
    return <img className={props.styling || 'h-9 w-9 min-w-9'} src={FaceImage} alt="Face" />
}

export default Face;