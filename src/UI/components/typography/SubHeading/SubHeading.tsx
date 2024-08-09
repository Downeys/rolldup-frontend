interface IHeaderProps {
    text: string;
    additionalStyles?: string;
}
export const SubHeading = (props: IHeaderProps) => {
    return <p className={`font-primary font-semibold text-lg leading-7 dark:text-white ${props.additionalStyles}`}>{props.text}</p>
}

export default SubHeading

// text-white 6
