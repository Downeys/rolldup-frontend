import SearchIcon from "../icons/SearchIcon"
import React from 'react'

interface ISearchBarProps {
    name: string;
    value?: string;
    icon?: React.FC;
    iconPosition: 'left' | 'right';
    border?: boolean;
    width?: string;
    height?: string;
    additionalStyles?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    onChange: (searchStr: string) => void;
    onSubmit?: (searchStr: any) => void;
}

export const SearchBar = (props: ISearchBarProps) => {
    const debounceSearch = React.useCallback(debounce((e) => props.onChange(e.target.value), 300), [])

    const [value, setValue] = React.useState('')
    const ref: React.RefObject<HTMLInputElement> = React.useRef() as React.RefObject<HTMLInputElement>
    const borderStyle = React.useMemo(() => props.border ? " border border-grey rounded" : "", [])
    const customStyles = React.useMemo(() => props.additionalStyles ? ` ${props.additionalStyles}` : '', [])
    const height = React.useMemo(() => props.height === 'sm' ? 'h-9' : 'h-12', [])
    const baseStyle = React.useMemo(() => `flex flex-row items-center px-4 dark:bg-slate-800 dark:text-white w-full ${borderStyle} ${customStyles} ${height}`, [borderStyle, customStyles, height])

    React.useEffect(() => {
        if (props.value) setValue(props.value)
    }, [props.value])

    const handleChange = (e) => {
        setValue(e.target.value)
        debounceSearch(e);
    }

    function debounce(func, timeout = 300){
        let timer:  ReturnType<typeof setTimeout>;
        return function(this: any, ...args: any[]) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), timeout);
        };
    }

    const handleIconClick = () => {
        if (props.onSubmit) props.onSubmit({ name: value });
        else ref.current?.focus()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.onSubmit) props.onSubmit({ name: value })
    }

    const Icon = props.icon || SearchIcon;

    return (
        <div className={props.iconPosition === 'left' ? baseStyle : baseStyle + ' justify-between'}>
            {props.iconPosition === 'left' && <Icon styling="h-6 w-6 mr-2" onClick={handleIconClick} />}
            <form onSubmit={handleSubmit} className="w-full">
                <input className="font-primary w-full text-lg font-semibold leading-6 placeholder-black outline-none focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder-white"
                    value={value}
                    placeholder={props.name}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                    onChange={handleChange}
                    ref={ref}
                />
            </form>
            {props.iconPosition === 'right' && <Icon styling="h-6 w-6" onClick={handleIconClick} />}
        </div>
    )
}

export default SearchBar