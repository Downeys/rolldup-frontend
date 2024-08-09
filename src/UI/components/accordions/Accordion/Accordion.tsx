import React from "react";
import DownChevronIcon from "../../icons/DownChevronIcon";
import UpChevronIcon from "../../icons/UpChevronIcon";
import Text from "../../typography/Text/Text"

interface IAccordionItemProps {
    label: string;
    icon?: any;
    index?: string;
    isCollapsed?: boolean;
    handleClick?: (index: string, isCollapsed: boolean) => void;
    children: any;
    borderless?: boolean;
}

interface IAccordionProps {
    defaultIndex?: string;
    onItemClick: Function;
    children: any;
}

export const AccordionItem = (props: IAccordionItemProps) => {
  const border = React.useMemo(() => props.borderless ? '' : 'border-b border-solid border-grey', [props.borderless])
  const Icon = React.useMemo(() => props.icon, [props.icon]);
  return (
    <>
      <div className={`flex flex-row justify-between bg-white dark:bg-slate-800 h-12 items-center ${border}`} onClick={() => props.handleClick && props.handleClick(props.index || '', props.isCollapsed || true)}>
          <span className="flex">
            {props.icon && <Icon selected styling='ml-2 h-6 w-6'/>}
            <Text bold text={props.label} additionalStyles='ml-2' />
          </span>
          {!props.isCollapsed ? <UpChevronIcon styling="h-6 w-6 mr-4" /> : <DownChevronIcon styling="h-6 w-6 mr-4" />}
      </div>
      {!props.isCollapsed && props.children} 
    </>
  );
};

export const Accordion = (props: IAccordionProps) => {
    const [bindIndex, setBindIndex] = React.useState(props.defaultIndex || '');

    React.useEffect(() => {
      setBindIndex(props.defaultIndex || '')
    }, [props.defaultIndex])
  
    const changeItem = (itemIndex, isCollapsed) => {
      if (typeof props.onItemClick === 'function') props.onItemClick(true);
      if (isCollapsed && itemIndex === bindIndex) {
        setBindIndex('')
        props.onItemClick(false);
      }
      else setBindIndex(itemIndex);
    };
  
    return (
      <>
        {props.children.map(({ props }, ix) => {
          return (<AccordionItem
            key={`${ix}-${props.label}`}
            isCollapsed={bindIndex !== props.index}
            label={props.label}
            handleClick={changeItem}
            children={props.children}
            {...props}
          />)
          }
      )}
      </>
    );
  };
