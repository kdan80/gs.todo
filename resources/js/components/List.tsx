/** @format */

import React from 'react'

interface IProps {
    className: string
}

const List = ({ className }: IProps) => {
    return <div className={`${className}`}>List</div>
}

export default List
