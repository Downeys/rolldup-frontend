import React from "react";

interface IHeaderProps {
    text: string;
    size?: 'sm' | 'lg' | 'xl' | '2xl'
    bold?: boolean;
    semibold?: boolean;
    alignment?: 'center';
    additionalStyles?: string;
    inline?: boolean;
}
export const Text = (props: IHeaderProps) => {
    const additionalStyles = React.useMemo(() => {
        const bold = props.bold ? 'font-bold' : '';
        const semibold = props.semibold ? 'font-semibold' : '';
        const size = props.size ? `text-${props.size}` : '';
        const inline = props.inline ? 'inline' : '';
        const alignment = props.alignment ? `text-${props.alignment}` : '';
        return `${bold} ${semibold} ${size} ${inline} ${alignment} ${props.additionalStyles}`
    }, [props])
    return <p className={`font-primary dark:text-white ${additionalStyles}`}>{props.text}</p>
}

export default Text
