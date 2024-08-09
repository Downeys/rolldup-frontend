import React from "react"
import PlusIcon from "../../components/icons/PlusIcon"
import FABOverlay from "./FABOverlay"

export const FAB = () => {
    const [overlayVisible, setOverlayVisible] = React.useState(false)

    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible)
    }

    const handleClickAway = () => {
        setOverlayVisible(false);
    }

    return (
        <div className="fixed flex justify-center top-0 left-0 h-full w-full pointer-events-none">
            <div className={`flex justify-end items-end h-screen pointer-events-none w-screen max-w-screen-sm`}>
                <div onClick={toggleOverlay} className='pointer-events-auto mr-4 mb-20 bg-palm rounded-full z-20 h-14 w-14 text-darkGreen flex items-center justify-center shadow-fabShadow'><PlusIcon /></div>
                <FABOverlay isVisible={overlayVisible} onClickAway={handleClickAway} />
            </div>
        </div>
    )
}

export default FAB