import { Transition } from "@headlessui/react"
import React from "react";

interface IModalWrapperProps {
    children: any;
    showModal: boolean;
    onCancel?: () => void;
}

export const ModalWrapper = (props: IModalWrapperProps) => {
    React.useEffect(() => {
        if (props.showModal) window.scrollTo(0,0)
    }, [props.showModal])

    return (
        <Transition show={props.showModal}>
            <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="z-20 h-full w-full fixed top-0 left-0 flex justify-center items-center"
                    onClick={() => {props.onCancel && props.onCancel()}}>
                        <div className="h-full w-full max-w-screen-sm bg-dollar bg-opacity-75" />
                </div>
            </Transition.Child>

            <div className="z-40 h-full w-screen absolute top-0 left-0 flex justify-center pt-44" onClick={() => {props.onCancel && props.onCancel()}} >
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 sm:scale-95"
                    enterTo="opacity-100  sm:scale-100"
                    leaveFrom="opacity-100 sm:scale-100"
                    leaveTo="opacity-0 sm:scale-95"
                >
                    {props.children}
                </Transition.Child>
            </div>
        </Transition>
    )
}

export default ModalWrapper