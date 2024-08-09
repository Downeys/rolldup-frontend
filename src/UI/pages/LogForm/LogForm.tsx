import React from "react"
import ActionButton from "../../components/buttons/ActionButton/ActionButton"
import SavingComponent from "../../components/SplashScreen/SavingComponent"
import { ModalWrapper } from "../../components/modals/ModalWrapper"
import { ToastModal } from "../../components/modals/ToastModal/ToastModal"
import LogFormContext, { LogFormDispatch } from "./LogFormContext/LogFormContext"
import { LogFormActionType } from "./LogFormContext/LogFormActionType.enum"

interface ILogFormState {
    inProgress: boolean;
    errorModalVisible: boolean;
}

interface ILogFormProps {
    onSubmit: (updatedLog: FormData, onError: (error: any) => void) => void;
}

export const LogForm = (props: ILogFormProps) => {
    const { validateForm, resetForm, logMode, errorMessage, formElements } = React.useContext(LogFormContext);
    const dispatch = React.useContext(LogFormDispatch);
    const { onSubmit } = props;

    const [state, setState] = React.useState<ILogFormState>({
        inProgress: false,
        errorModalVisible: false,
    })

    const onError = React.useCallback((e: any) => {                
        console.log(e)
        setState({ ...state, inProgress: false, errorModalVisible: true })
    }, [state])

    const handleCloseErrorModal = React.useCallback(() => {
        setState({ ...state, errorModalVisible: false })
        dispatch({ type: LogFormActionType.RESET_FORM, payload: {} })
    }, [state, dispatch])

    const handleFormSubmit = React.useCallback(async () => {
        setState({ ...state, inProgress: true })
        const finalForm = validateForm?.();
        if (finalForm) {
            resetForm?.();
            onSubmit(finalForm, onError);
        } else {
            setState({ ...state, inProgress: false, errorModalVisible: true })
        }
    }, [state, validateForm, onSubmit, onError, resetForm])

    React.useEffect(() => {
        if (!!errorMessage?.length) setState({ ...state, errorModalVisible: true })
    }, [errorMessage])

    return (state.inProgress ? <SavingComponent /> :
        <div className='h-full dark:bg-slate-800'>
            <ModalWrapper showModal={state.errorModalVisible} onCancel={() => {}} ><ToastModal message={errorMessage || ''} onClose={handleCloseErrorModal} /></ModalWrapper>
            <div className="px-9 pt-4">
                {formElements?.map(element => {
                    const Element = element.field.component;
                    return <Element key={element.field.name} />
                })}
            </div>
            <div className="fixed bottom-0 flex justify-center items-center w-full max-w-screen-sm px-9 pt-5 pb-20 z-30 bg-white dark:bg-slate-800">
                <ActionButton appearance="primary" type='submit' text={logMode === 'edit' ? 'Submit Update' : 'Post Review'} onClick={handleFormSubmit} />
            </div>

            <div className="h-36" />
        </div>)
}

export default LogForm