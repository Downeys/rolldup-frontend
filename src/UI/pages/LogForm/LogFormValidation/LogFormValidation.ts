import { Specification } from "../../../../lib/types";
import { STRAIN_CATEGORIES } from "../../../constants"
import { FormConfig } from "../form-config";

export interface FormForValidation {
    review?: string;
    rating: number;
    strainIndex?: number;
    category: string;
    strainName?: string;
    brandName?: string;
    productName?: string;
}

export const reviewIsValid: Specification<FormForValidation> = {
    isSatisfiedBy: ({ review }) => {
        //should be no more than 300 characters
        return !!(review?.length && review.length < 300);
    }
}

export const ratingIsValid: Specification<FormForValidation> = {
    isSatisfiedBy: ({ rating }) => {
        //should be number between 1-5 inclusive
        return rating > 0 && rating < 6;
    }
}

export const speciesIsValid: Specification<FormForValidation> = {
    isSatisfiedBy: ({ strainIndex }) => {
        //should be number between 1-5 inclusive
        return !!(strainIndex && strainIndex > 0 && strainIndex < 6);
    }
}

export const categoryIsValid: Specification<FormForValidation> = {
    isSatisfiedBy: ({ category }) => {
        //should be one of the standard category names
        return STRAIN_CATEGORIES.map(strain => strain.name.toUpperCase()).includes(category.toUpperCase())
    }
}
export const strainNameIsValid: Specification<FormForValidation> = {
    isSatisfiedBy: ({ strainName }) => {
        // name should be at least one character long
        // name should be no more than 40 characters long
        return !!(strainName && strainName.length > 0 && strainName.length < 41)
    }
}

export const brandNameIsValid: Specification<FormForValidation> = {
    isSatisfiedBy: ({ brandName }) => {
        // name should be at least one character long
        return !!(brandName && brandName.length > 0);
    }
}

export const productNameIsValid: Specification<FormForValidation> = {
    isSatisfiedBy: ({ productName }) => {
        // name should be at least one character long
        return !!(productName && productName.length > 0);
    }
}

export const formIsValid = (form: FormForValidation, config: FormConfig) => {
    const requiredSpecifications = config.elements.filter(element => element.required === 'required').map(el => el.field.specifications);
    let formIsValid = true;
    requiredSpecifications.forEach(specList => specList.forEach(spec => {
        if (!spec.isSatisfiedBy(form)) formIsValid = false;
    }))
    return formIsValid
}