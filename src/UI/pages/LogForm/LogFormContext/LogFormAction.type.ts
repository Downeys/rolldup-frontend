import { LogFormActionType } from "./LogFormActionType.enum"

export type LogFormAction = 
    | {
        type: LogFormActionType.CHANGE_FOCUS_ELEMENT;
        payload: {
            elementName: string
        }
    }
    | {
        type: LogFormActionType.UPDATE_CATEGORY;
        payload: {
            category: string
        }
    }
    | {
        type: LogFormActionType.UPDATE_STRAIN_NAME;
        payload: {
            strainName: string
        }
    }
    | {
        type: LogFormActionType.UPDATE_RATING;
        payload: {
            rating: number
        }
    }
    | {
        type: LogFormActionType.UPDATE_REVIEW;
        payload: {
            review: string
        }
    }
    | {
        type: LogFormActionType.UPDATE_STRAIN_INDEX;
        payload: {
            strainIndex: number
        }
    }
    | {
        type: LogFormActionType.UPDATE_MGS;
        payload: {
            mgs: number
        }
    }
    | {
        type: LogFormActionType.UPDATE_PERCENTAGE;
        payload: {
            percentage: number
        }
    }
    | {
        type: LogFormActionType.UPDATE_CANNIBINOID;
        payload: {
            cannibinoid: string
        }
    }
    | {
        type: LogFormActionType.UPDATE_PURCHASE_LOCATION;
        payload: {
            purchaseLocationName: string,
            purchaseLocationId: number
        }
    }
    | {
        type: LogFormActionType.UPDATE_BRAND;
        payload: {
            brandName: string,
            brandId: number
        }
    }
    | {
        type: LogFormActionType.UPDATE_PRODUCT;
        payload: {
            productName: string,
            productId: number
        }
    }
    | {
        type: LogFormActionType.UPDATE_ERROR_MESSAGE;
        payload: {
            message: string
        }
    }
    | {
        type: LogFormActionType.RESET_FORM;
        payload: {}
    }
