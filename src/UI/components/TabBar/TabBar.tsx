import React from "react";
import Tab from "./Tab/Tab";

interface ITabs {
    name: string;
    content: any;
}

interface ITabBarProps {
    tabs: ITabs[];
    showContent: boolean;
}

export const assignContent = (props: ITabBarProps, selectedTab: string) => {
    const contentObj = props.tabs.reduce((prev, rec) => ({ ...prev, [rec.name]: rec.content}), {});
    const Content = contentObj[selectedTab]
    return Content;
}

export const TabBar = (props: ITabBarProps) => {
    const [selectedTab, setSelectedTab] = React.useState(props.tabs[0].name)
    const Content = React.useMemo(() => assignContent(props, selectedTab), [selectedTab])

    const handleTabClick = (name: string) => {
        setSelectedTab(name)
    }

    return (
        <>
            <div className="w-full flex flex-row justify-evenly">
                {props.tabs.map((tab, ix) => <Tab key={`SocialTab-${ix}`} name={tab.name} isSelected={tab.name === selectedTab} onClick={handleTabClick} /> )}
            </div>
            {props.showContent && <div className="w-full flex flex-col">
                <Content />
            </div>}
        </>
    )
}

export default TabBar