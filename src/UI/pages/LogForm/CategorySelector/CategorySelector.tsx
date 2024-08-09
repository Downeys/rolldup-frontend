import React from "react"
import { Dropdown } from "../../../components/buttons/Dropdown/Dropdown"
import LogFormContext, { LogFormDispatch } from "../LogFormContext/LogFormContext"
import { STRAIN_CATEGORIES } from "../../../constants"
import { LogFormActionType } from "../LogFormContext/LogFormActionType.enum"

export const CategorySelector = () => {
    const { category, formElementInFocus } = React.useContext(LogFormContext)
    const dispatch = React.useContext(LogFormDispatch);

    const takeFocus = () => dispatch({ type: LogFormActionType.CHANGE_FOCUS_ELEMENT, payload: { elementName: 'Category' }})
    const handleSelect = (categoryName: string) => dispatch({ type: LogFormActionType.UPDATE_CATEGORY, payload: { category: categoryName }}) 

    return (
        <Dropdown
            key="log-dropdown"
            title='Category'
            selected={category}
            menuItems={STRAIN_CATEGORIES}
            takeFocus={takeFocus}
            hasFocus={formElementInFocus === 'Category'}
            onSelect={handleSelect}
            />
    )
}

export default CategorySelector