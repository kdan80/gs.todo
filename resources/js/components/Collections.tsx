/** @format */

import NewListButton from './NewListButton'
import { Inertia } from '@inertiajs/inertia'
import TodoListMenuItem from './TodoListMenuItem'

interface Props {
    todoLists: TodoList[]
    className: string
}

const Collections = ({ todoLists, className }: Props) => {
    const destroy = (id: number) => {
        Inertia.delete(`todolist/${id}`)
    }

    return (
        <div
            className={`${className} h-screen px-6 text-white text-2xl bg-[#20212C] flex flex-col flex-justify`}>
            <div className='py-10 md:text-xl flex justify-between items-center'>
                <div className='font-bold'>Collections</div>
            </div>
            <div className='flex-grow overflow-auto no-scrollbar'>
                <ul className='space-y-5 md:space-y-4'>
                    {todoLists.map((todoList, index, arr) => {
                        return (
                            <TodoListMenuItem
                                key={todoList.id}
                                id={todoList.id}
                                color={todoList.color}
                                name={todoList.name}
                                // If this is the last element in the array tag it so that IntersectionObserver can find it
                                className={
                                    arr.length - 1 === index ? 'last' : ''
                                }
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
