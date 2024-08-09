import React from 'react'
import { ILayoutProps } from '../../shared-UI-Interfaces'

export const NoLayout = (props: ILayoutProps) => {

    const ChildComponent = props.component;

    return (
        <div className='h-full w-full flex justify-center bg-texasGreen'>
            <div className="flex flex-col w-614 bg-white">
                <ChildComponent />
            </div>
        </div>
    )
}

export default NoLayout;