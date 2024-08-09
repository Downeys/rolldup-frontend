import { STRAIN_LEVELS } from "../../../constants";
import { LogFormAction } from "./LogFormAction.type";
import { LogFormActionType } from "./LogFormActionType.enum";
import { LogFormContextState, defaultLogFormState } from "./LogFormContextState";

export const LogFormReducer = (state: LogFormContextState, action: LogFormAction) => {
    const { type, payload } = action;

    switch (type) {
        case LogFormActionType.CHANGE_FOCUS_ELEMENT:
            return { ...state, formElementInFocus: payload.elementName }
        case LogFormActionType.UPDATE_CATEGORY:
            return { ...state, category: payload.category}
        case LogFormActionType.UPDATE_STRAIN_NAME:
            return { ...state, strainName: payload.strainName }
        case LogFormActionType.UPDATE_RATING:
            return { ...state, rating: payload.rating }
        case LogFormActionType.UPDATE_REVIEW:
            return { ...state, review: payload.review  }
        case LogFormActionType.UPDATE_STRAIN_INDEX:
            return { ...state, strainIndex: payload.strainIndex, strain:  STRAIN_LEVELS[payload.strainIndex - 1] }
        case LogFormActionType.UPDATE_MGS:
            return { ...state, mgs: payload.mgs }
        case LogFormActionType.UPDATE_PERCENTAGE:
            return { ...state, percentage: payload.percentage }
        case LogFormActionType.UPDATE_CANNIBINOID:
            return { ...state, cannibinoid: payload.cannibinoid }
        case LogFormActionType.UPDATE_PURCHASE_LOCATION:
            return { ...state, ...payload }
        case LogFormActionType.UPDATE_BRAND:
            return { ...state, ...payload }
        case LogFormActionType.UPDATE_PRODUCT:
            return { ...state, ...payload }
        case LogFormActionType.UPDATE_ERROR_MESSAGE:
            return { ...state, errorMessage: payload.message }
        case LogFormActionType.RESET_FORM:
            return { ...defaultLogFormState }
        default:
            throw new Error("Unrecognized LogForm Event")
    }
}