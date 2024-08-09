import React from "react"
import FABButton from "../../components/buttons/FABButton/FABButton"
import { Transition } from '@headlessui/react'
import { STRAIN_CATEGORIES } from '../../constants'
import { useNavWrapper } from "../../../utils/navigate-wrapper/useNavWrapper"

interface IFABOverlay {
    isVisible: boolean;
    onClickAway: () => void;
}

export const FABOverlay = (props: IFABOverlay) => {
    const [isVisible, setIsVisible] = React.useState(props.isVisible)
    const nav = useNavWrapper();

    React.useEffect(() => {
        setIsVisible(props.isVisible)
    }, [props.isVisible])

    const handleFabClick = (category) => {
        setIsVisible(!props.isVisible)
        nav(`/post/${category}`)
    }

    const handleClickAway = () => {
        setIsVisible(false);
        props.onClickAway();
    }

    return (
        <Transition show={isVisible}>
            <div className="fixed flex justify-center top-0 left-0 h-full w-full">
                <div className={`flex flex-col justify-end bg-dollar bg-opacity-75 h-full w-full max-w-screen-sm`} onClick={handleClickAway}>
                    <Transition.Child
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                    >
                        <div className="flex flex-col justify-end h-full w-full">
                            <div className="mb-36 pointer-events-auto ">
                                {STRAIN_CATEGORIES.map((button, ix) => <FABButton text={button.name} icon={button.icon} key={'FABButton ' + ix} onFabClick={handleFabClick}/>)}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition>
    )
}

export default FABOverlay