/** @format */

import React from 'react'
import Icon from './Icon'

interface Props {
    color: string
    onClick: any
    children: React.ReactNode
}

const ColorButton = ({ color, onClick, children }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`flex flex-row items-center cursor-pointer grow overflow-hidden whitespace-nowrap text-ellipsis`}>
            <Icon color={color} />
            <span
                className={`px-4 overflow-hidden whitespace-nowrap text-ellipsis`}>
                {children}
            </span>
        </button>
    )
}

export default ColorButton
