import React from "react";

interface IHeaderProps {
    text: string;
    additionalStyles?: string;
    size?: 'lg' | 'xl' | '2xl'
}

export const Heading = (props: IHeaderProps) => {
    const fontSize = React.useMemo(() => ({
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl' 
    }), [])
    return <p className={`dark:text-white font-primary font-bold leading-5 ${fontSize[props.size || 'lg']} ${props.additionalStyles}`}>{props.text}</p>
}

export default Heading