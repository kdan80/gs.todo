/** @format */

import React from 'react'
import NewListButton from './NewListButton'
import { Inertia } from '@inertiajs/inertia'
import TodoListMenuItem from './TodoListMenuItem'
import { useInView } from 'react-intersection-observer'

interface Props {
    todoLists: TodoList[]
    className: string
}

const Collections = ({ todoLists, className }: Props) => {
    const destroy = (id: number) => {
        Inertia.delete(`todolist/${id}`)
    }

    const [ref, inView, entry] = useInView({
        threshold: 1,
    })
    //const ref = React.useRef(null)
    React.useEffect(() => {
        console.log('in view: ', inView)
    }, [inView])

    return (
        <div
            className={`${className} h-screen px-6 text-white text-2xl bg-[#20212C] flex flex-col flex-justify`}>
            <div className='py-10 md:text-xl flex justify-between items-center'>
                <div className='font-bold'>Collections</div>
            </div>
            <div className='flex-grow overflow-auto no-scrollbar'>
                <ul className='space-y-5 md:space-y-4'>
                    {todoLists.map((todoList, index, arr) => {
                        return arr.length - 1 === index ? (
                            <TodoListMenuItem
                                key={todoList.id}
                                id={todoList.id}
                                color={todoList.color}
                                name={todoList.name}
                                // If this is the last element forward a ref so that IntersectionObserver can find it
                                observerRef={ref}
                            />
                        ) : (
                            <TodoListMenuItem
                                key={todoList.id}
                                id={todoList.id}
                                color={todoList.color}
                                name={todoList.name}
                            />
                        )
                    })}
                </ul>
            </div>
            <div className='py-8 md:py-12 md:text-xl text-xl md:text-base text-gray-300 flex justify-center items-center'>
                <NewListButton />
            </div>
        </div>
    )
}

export default Collections

// if (arr.length - 1 === index) {
//     return (
//         <TodoListMenuItem
//             key={todoList.id}
//             id={todoList.id}
//             color={todoList.color}
//             name={todoList.name}
//             // If this is the last element forward a ref so that IntersectionObserver can find it
//             ref={ref}
//         />
//     )
// } else {
//     return (
//         <TodoListMenuItem
//             key={todoList.id}
//             id={todoList.id}
//             color={todoList.color}
//             name={todoList.name}
//         />
//     )
// }
