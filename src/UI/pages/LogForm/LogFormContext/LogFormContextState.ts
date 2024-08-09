import { STRAIN_CATEGORIES } from "../../../constants"
import { FormElementConfig } from "../form-config"

export interface LogFormContextState {
    logMode: 'create' | 'edit'
    formElements?: FormElementConfig[]
    formElementInFocus: string
    category: string
    strainName?: string
    strainId?: number;
    brandName?: string
    brandId?: number;
    productName?: string;
    productId?: number;
    purchaseLocationName?: string
    purchaseLocationId?: number;
    rating: number
    review?: string
    strain: string
    strainIndex?: number
    mgs: number
    percentage: number
    cannibinoid: string
    pic: FormData
    existingPostId?: number
    existingPhotoUrl?: string
    errorMessage?: string
    validateForm?: () => FormData
    resetForm?: () => void;
}

export const defaultLogFormState: LogFormContextState =  {
    logMode: 'create',
    formElements: [],
    formElementInFocus: 'none',
    category: STRAIN_CATEGORIES.filter(strain => strain.name === window.location.pathname.split('/')[2]).length > 0 ? window.location.pathname.split('/')[2] : 'Flower',
    strainName: '',
    brandName: '',
    productName: '',
    rating: 3,
    review: '',
    strain: 'Hybrid',
    strainIndex: 3,
    mgs: 50,
    percentage: 50,
    cannibinoid: 'THC',
    pic: new FormData(),
    errorMessage: '',
}