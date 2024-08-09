import Toggle from "../../../components/buttons/Toggle/Toggle";
import Text from "../../../components/typography/Text/Text";

interface ISettingsToggleProps {
    name: string;
    isEditable: boolean;
    isOn: boolean;
    onToggle: (noti: string) => void
}

export const SettingsToggle = (props: ISettingsToggleProps) => {
    
    const handleToggle = () => {
        props.onToggle(props.name)
    }

    return (
        <div className="h-12 flex flex-row justify-between items-center px-4">
            <Text bold text={props.name} />
            <Toggle isEditable={props.isEditable} onToggle={handleToggle} isOn={props.isOn} />
        </div>
    )
}

export default SettingsToggle