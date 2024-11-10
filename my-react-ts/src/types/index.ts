export interface Todo {
    id: number
    text: string
    completed: boolean
}
export interface User {
    user_id: number
    user_name: string
    user_age: number
}
export interface TodosState {
    todosReducer: Todo[]
    usersReducer: User[]
}