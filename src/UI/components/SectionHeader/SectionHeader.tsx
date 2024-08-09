import Text from '../typography/Text/Text'

interface ISectinHeaderProps {
    label: string;
}

export const SectionHeader = (props: ISectinHeaderProps) => {
    return (
        <div className="flex h-12 items-center border-b border-t border-solid border-grey dark:border-slate-400 dark:text-white">
            <Text bold text={props.label} additionalStyles='ml-4' />
        </div>
    )
}

export default SectionHeader;
