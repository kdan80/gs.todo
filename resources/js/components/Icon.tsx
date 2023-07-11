/** @format */

import React from 'react'

interface Props {
    color: string
}

const DottedLine = () => {
    return (
        <div className='flex flex-row space-x-[4px] items-center'>
            <span className='h-[5px] w-[5px] bg-white rounded-full'></span>
            <span className='h-[3px] w-[22px] bg-white rounded-full'></span>
        </div>
    )
}

const Icon = ({ color }: Props) => {
    return (
        <div
            className={`h-12 w-12 ${color} rounded-xl flex flex-col items-center gap-[4px] justify-center`}>
            <DottedLine />
            <DottedLine />
            <DottedLine />
        </div>
    )
}

export default Icon
