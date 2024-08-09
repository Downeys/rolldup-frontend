import React from "react";
import CategorySelector from "./CategorySelector/CategorySelector";
import PhotoInput from "./PhotoInput/PhotoInput";
import PurchaseLocationSearch from "./PurchaseLocationSearch/PurchaseLocationSearch";
import ReviewCard from "./ReviewCard/ReviewCard";
import StrainSearch from "./StrainSearch/StrainSearch";
import StrainSlider from "./StrainSlider/StrainSlider";
import ThcSlider from "./ThcSlider/ThcSlider";
import RatingCard from "./RatingCard/RatingCard";
import BrandSearch from "./BrandSearch/BrandSearch";
import ProductSearch from "./ProductSearch/ProductSearct";
import { Specification } from "../../../lib/types";
import { FormForValidation, brandNameIsValid, categoryIsValid, productNameIsValid, ratingIsValid, reviewIsValid, speciesIsValid, strainNameIsValid } from "./LogFormValidation/LogFormValidation";

export interface FormElement {
    name: string,
    component: React.FC,
    specifications: Specification<FormForValidation>[]
}

export interface FormElementConfig {
    field: FormElement;
    required: string;
}

export interface FormConfig {
    category: string,
    elements: FormElementConfig[]
}

const CategoryField: FormElement = {
    name: 'category',
    component: CategorySelector,
    specifications: [
        categoryIsValid
    ]
}

const BrandField: FormElement = {
    name: 'brand',
    component: BrandSearch,
    specifications: [
        brandNameIsValid
    ]
}

const StrainField: FormElement = {
    name: 'strain',
    component: StrainSearch,
    specifications: [
        strainNameIsValid
    ]
}

const PhotoField: FormElement = {
    name: 'photo',
    component: PhotoInput,
    specifications: []
}

const RatingField: FormElement = {
    name: 'rating',
    component: RatingCard,
    specifications: [
        ratingIsValid
    ]
}

const ReviewField: FormElement = {
    name: 'review',
    component: ReviewCard,
    specifications: [
        reviewIsValid
    ]
}

const SpeciesField: FormElement = {
    name: 'species',
    component: StrainSlider,
    specifications: [
        speciesIsValid
    ]
}

const ThcField: FormElement = {
    name: 'thc',
    component: ThcSlider,
    specifications: []
}

const PurchaseLocationField: FormElement = {
    name: 'purchase-location',
    component: PurchaseLocationSearch,
    specifications: []
}

const ProductField: FormElement = {
    name: 'product',
    component: ProductSearch,
    specifications: [
        productNameIsValid
    ]
}

export const formConfig: FormConfig[] = [
    {
        category: 'PreRoll',
        elements: [
            { field: CategoryField, required: 'required' },
            { field: BrandField, required: 'required' },
            { field: StrainField, required: 'required' },
            { field: PhotoField, required: 'required' },
            { field: RatingField, required: 'required' }, 
            { field: ReviewField,  required: 'always-optional' },
            { field: SpeciesField, required: 'required' },
            { field: ThcField, required: 'always-optional' },
            { field: PurchaseLocationField, required: 'always-optional' }
        ]
    },
    {
        category: 'Concentrate',
        elements: [
            { field: CategoryField, required: 'required' },
            { field: BrandField, required: 'required' },
            { field: ProductField, required: 'required' },
            { field: StrainField, required: 'required' },
            { field: PhotoField, required: 'required' },
            { field: RatingField, required: 'required' }, 
            { field: ReviewField,  required: 'always-optional' },
            { field: SpeciesField, required: 'required' },
            { field: ThcField, required: 'always-optional' },
            { field: PurchaseLocationField, required: 'always-optional' }
        ]
    },
    {
        category: 'Topical',
        elements: [
            { field: CategoryField, required: 'required' },
            { field: BrandField, required: 'required' },
            { field: ProductField, required: 'required' },
            { field: PhotoField, required: 'required' },
            { field: RatingField, required: 'required' }, 
            { field: ReviewField,  required: 'always-optional' },
            { field: SpeciesField, required: 'required' },
            { field: ThcField, required: 'always-optional' },
            { field: PurchaseLocationField, required: 'always-optional' }
        ]
    },
    {
        category: 'Cartridge',
        elements: [
            { field: CategoryField, required: 'required' },
            { field: BrandField, required: 'required' },
            { field: StrainField, required: 'required' },
            { field: PhotoField, required: 'required' },
            { field: RatingField, required: 'required' }, 
            { field: ReviewField,  required: 'always-optional' },
            { field: SpeciesField, required: 'required' },
            { field: ThcField, required: 'always-optional' },
            { field: PurchaseLocationField, required: 'always-optional' }
        ]
    },
    {
        category: 'Edible',
        elements: [
            { field: CategoryField, required: 'required' },
            { field: BrandField, required: 'required' },
            { field: ProductField, required: 'required' },
            { field: PhotoField, required: 'required' },
            { field: RatingField, required: 'required' }, 
            { field: ReviewField,  required: 'always-optional' },
            { field: SpeciesField, required: 'required' },
            { field: ThcField, required: 'always-optional' },
            { field: PurchaseLocationField, required: 'always-optional' }
        ]
    },
    {
        category: 'Flower',
        elements: [
            { field: CategoryField, required: 'required' },
            { field: StrainField, required: 'required' },
            { field: PhotoField, required: 'required' },
            { field: RatingField, required: 'required' }, 
            { field: ReviewField,  required: 'always-optional' },
            { field: SpeciesField, required: 'required' },
            { field: ThcField, required: 'always-optional' },
            { field: PurchaseLocationField, required: 'always-optional' }
        ]
    },
]

export default formConfig;