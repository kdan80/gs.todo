/** @format */

import React from 'react'

interface Props {
    children?: React.ReactNode
    className?: string
}

const ListView = ({ children, className }: Props) => {
    return <div className={`${className}`}>{children}</div>
}

export default ListView
