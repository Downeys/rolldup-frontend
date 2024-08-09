import { Accordion, AccordionItem } from "../Accordion/Accordion";

export interface IAccordionItem {
    label: string;
    content: any;
    icon?: any;
}

export interface IWrappedAccordionProps {
    menuItems: IAccordionItem[]
    borderless?: boolean;
    defaultIndex?: string;
}

export const WrappedAccordion = (props: IWrappedAccordionProps) => {
    return (
        <Accordion onItemClick={(index) => console.log(index)} defaultIndex={props.defaultIndex || ''}>
            {props.menuItems.map((tab, ix) => {
                const ChildComp = tab.content
                const icon = tab.icon ? { icon: tab.icon } : {}
                return (
                <AccordionItem borderless={!!props.borderless} { ...icon }  label={tab.label} index={tab.label} key={`${ix}-${tab.label}`}>
                    <ChildComp />
                </AccordionItem>)
            })}
        </Accordion>
    )
}

export default WrappedAccordion