import React from 'react'
import { LogFormAction } from './LogFormAction.type'
import { LogFormContextState, defaultLogFormState } from './LogFormContextState';
import { LogFormReducer } from './LogFormReducer';
import { STRAIN_CATEGORIES, STRAIN_LEVELS } from '../../../constants';
import { formIsValid } from '../LogFormValidation/LogFormValidation';
import { UserAccountInfo } from '../../../../utils/providers/AccountProvider';
import { LogFormActionType } from './LogFormActionType.enum';
import formConfig, { FormConfig } from '../form-config';

type TLogFormDispatch = (action: LogFormAction) => void;

export const LogFormContext = React.createContext<LogFormContextState>({} as LogFormContextState)
export const LogFormDispatch = React.createContext<TLogFormDispatch>((() => {}) as TLogFormDispatch)

export const LogFormContextProvider = ({ children, value = {} as LogFormContextState }) => {
    const { user } = React.useContext(UserAccountInfo);

    const initialState: LogFormContextState = React.useMemo(() => {        
        if (!!value.category) return ({
            logMode: value.logMode,
            formElementInFocus: value.formElementInFocus,
            category: value.category,
            strainId: value.strainId,
            strainName: value.strainName,
            brandId: value.brandId,
            brandName: value.brandName,
            productId: value.productId,
            productName: value.productName,
            purchaseLocationId: value.purchaseLocationId,
            purchaseLocationName: value.purchaseLocationName,
            rating: value.rating,
            review: value.review,
            strain: value.strain,
            strainIndex: STRAIN_LEVELS.indexOf(value.strain) + 1,
            mgs: value.mgs || defaultLogFormState.mgs,
            percentage: value.percentage,
            cannibinoid: value.cannibinoid,
            pic: new FormData(),
            existingPostId: value.existingPostId,
            existingPhotoUrl: value.existingPhotoUrl,
            errorMessage: defaultLogFormState.errorMessage,
        })
        else return { ...defaultLogFormState, category: STRAIN_CATEGORIES.filter(strain => strain.name === window.location.pathname.split('/')[2]).length > 0 ? window.location.pathname.split('/')[2] : ''}
    }, [value]);

    const [state, dispatch] = React.useReducer(LogFormReducer, initialState);

    const config: FormConfig = React.useMemo(() => {
        const config = formConfig.filter(cfg => cfg.category === state.category);
        return config?.[0];
    }, [state.category])

    const formElements = React.useMemo(() => config.elements, [config])

    const validateForm =React.useCallback(() => {
        const validatedForm = new FormData();
        const pic = state.pic.get('file');
        const form = { strainName: state.strainName, category: state.category, strainIndex: state.strainIndex, rating: state.rating, review: state.review, brandName: state.brandName, productName: state.productName }
        if ((state.logMode === 'edit' || pic) && state.strainIndex && formIsValid(form, config)) {
            if (pic) validatedForm.append("file", pic);
            validatedForm.append("username", user.username);
            validatedForm.append("strainName", state.strainName || '');
            validatedForm.append("category", state.category);
            validatedForm.append("rating", ''+state.rating);
            validatedForm.append("review", state.review || '');
            validatedForm.append("strain", state.strain);
            validatedForm.append("cannabinoid", state.cannibinoid);
            validatedForm.append("percentage", ''+state.percentage);
            validatedForm.append("mgs", ''+state.mgs);
            validatedForm.append("purchaseLocationName", state.purchaseLocationName || '')
            validatedForm.append("brandName", state.brandName || '');
            validatedForm.append("productName", state.productName || '')
            if (state.strainId && state.strainId !== -1) validatedForm.append("strainId", ''+state.strainId)
            if (state.purchaseLocationId && state.purchaseLocationId !== -1) validatedForm.append("purchaseLocationId", ''+state.purchaseLocationId)
            if (state.brandId && state.brandId !== -1) validatedForm.append("brandId", ''+state.brandId)
            if (state.productId && state.productId !== -1) validatedForm.append("productId", ''+state.productId)
            if (state.logMode === 'edit') {
                validatedForm.append("id", ''+state.existingPostId);
                validatedForm.append("picUrl", ''+state.existingPhotoUrl);
            }
        } else {
            dispatch({ type: LogFormActionType.UPDATE_ERROR_MESSAGE, payload: { message: 'An error occurred while saving your post. Please try again. If you continue to experience issues, please contact support via the settings page.' } })
        }   
        return validatedForm;
    }, [state, dispatch, user.username, config])

    const resetForm = React.useCallback(() => {
        state.pic.delete('file');
        dispatch({ type: LogFormActionType.RESET_FORM, payload: {} })
    }, [state, dispatch])

    const providedState = React.useMemo(() => ({ ...state, formElements, validateForm, resetForm }), [state, formElements, validateForm, resetForm]);

    return (
        <LogFormContext.Provider value={providedState}>
            <LogFormDispatch.Provider value={dispatch}>
                {children}
            </LogFormDispatch.Provider>
        </LogFormContext.Provider>
    )
}

export default LogFormContext;
