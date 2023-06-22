/** @format */

import React from 'react'

const Dashboard = (props: any) => {
    return (
        <div className='text-3xl'>
            <ul>
                {props.todos.map((todo: any, index: any) => (
                    <li key={index}>{todo.description}</li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard
