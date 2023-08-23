/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface Props {
    showModal: boolean
    changeColor: (color: string) => void
    closeColorModal: () => void
}
import colorVariants, { IColorVariants } from './colorVariants'

const colors = [
    'red',
    'teal',
    'pink',
    'purple',
    'yellow',
    'blue',
    'green',
    'orange',
    'brown',
]

const ChangeColorModal = ({
    showModal,
    changeColor,
    closeColorModal,
}: Props) => {
    const ref = React.useRef<HTMLDialogElement>(null)

    React.useEffect(() => {
        const dialog = ref.current

        if (dialog && showModal) {
            dialog.showModal()
        }

        return () => {
            if (dialog) dialog.close()
        }
    }, [showModal])

    const handleClick = (color: string) => {
        changeColor(color)
        closeColorModal()
    }

    return (
        <dialog
            ref={ref}
            className='backdrop:bg-[#000000cc] backdrop:backdrop-blur-sm bg-[#20212C] rounded-xl overflow-hidden'>
            <div className='flex flex-row-reverse'>
                <button
                    onClick={closeColorModal}
                    className='w-14 h-14 text-red'>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className='h-[24px] w-[24px]'
                    />
                </button>
            </div>
            <div className='p-10 pt-4'>
                <div className='text-white text-center mb-8'>
                    Change list color
                </div>

                <ul className='grid grid-cols-3 gap-4'>
                    {colors.map((color, index) => (
                        <li
                            key={index}
                            className='flex items-center justify-center'>
                            <button
                                type='button'
                                onClick={() => handleClick(color)}
                                className={`w-14 h-14 rounded-full ${
                                    colorVariants[color as keyof IColorVariants]
                                }`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </dialog>
    )
}

export default ChangeColorModal
