/** @format */

import React from 'react'
import colorVariants, { IColorVariants } from './colorVariants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'

interface Props {
    color: string
}

const Icon = ({ color }: Props) => {
    return (
        <div
            className={`h-[36px] w-[36px] min-w-[36px] min-h-[36px] md:min-h-[36px] md:min-w-[36px] md:h-[36px] md:w-[36px] ${
                colorVariants[color as keyof IColorVariants]
            } rounded-lg flex flex-col items-center gap-[4px] md:gap-[2px] justify-center`}>
            <FontAwesomeIcon
                icon={faRectangleList}
                className='h-[24px] w-[24px]'
            />
        </div>
    )
}

export default Icon
