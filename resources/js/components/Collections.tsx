/** @format */

import React, { Dispatch, SetStateAction } from 'react'
import NewListButton from './NewListButton'
import axios from 'axios'
import TodoListMenuItem from './TodoListMenuItem'

interface Props {
    todoLists: TodoList[]
    setTodoLists: Dispatch<SetStateAction<TodoList[]>>
    setNextPage: Dispatch<SetStateAction<string | null>>
    nextPage: string | null
    className: string
}

const Collections = ({
    todoLists,
    setTodoLists,
    nextPage,
    setNextPage,
    className,
}: Props) => {
    const ref = React.useRef(null)
    const [inView, setInView] = React.useState(false)

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting)
        })

        const fecthNextData = async () => {
            const response = await axios.get(nextPage)
            setNextPage(response.data.next_page_url)
            setTodoLists(current => [...current, ...response.data.data])
        }

        observer.observe(ref.current!)

        if (inView && nextPage !== null) {
            fecthNextData()
        }

        return () => observer.disconnect()
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
                                ref={ref}
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
