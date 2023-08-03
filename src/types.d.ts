/** @format */

type Link = {
    url: string | null
    label: string
    active: boolean
}

type TodoList = {
    id: number
    name: string
    color: string
    created_at: string
    updated_at: string
}

type Pagination = {
    current_page: number
    data: TodoList[]
    first_page_url: string | null
    from: number
    last_page: number
    last_page_url: string | null
    links: Link[]
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}
