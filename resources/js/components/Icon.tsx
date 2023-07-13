/** @format */

import React from 'react'
import colorVariants, { IColorVariants } from './colorVariants'

interface Props {
    color: string
}

const DottedLine = () => {
    return (
        <div className='flex flex-row space-x-[4px] md:space-x-[3px] items-center'>
            <span className='h-[5px] w-[5px] md:h-[4px] md:w-[4px] bg-white rounded-full'></span>
            <span className='h-[3px] w-[22px] md:h-[2px] md:w-[14px] bg-white rounded-full'></span>
        </div>
    )
}

const Icon = ({ color }: Props) => {
    return (
        <div
            className={`h-[48px] w-[48px] min-w-[48px] min-h-[48px] md:min-h-[36px] md:min-w-[36px] md:h-[36px] md:w-[36px] ${
                colorVariants[color as keyof IColorVariants]
            } rounded-xl flex flex-col items-center gap-[4px] md:gap-[2px] justify-center`}>
            <DottedLine />
            <DottedLine />
            <DottedLine />
        </div>
    )
}

export default Icon
