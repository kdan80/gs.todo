/** @format */

import React from 'react'
import Icon from './Icon'

interface Props {
    color: string
    onClick: any
}

const ColorButton = ({ color, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`flex flex-row shrink-0 items-center overflow-hidden whitespace-nowrap text-ellipsis`}>
            <Icon color={color} />
        </button>
    )
}

export default ColorButton
