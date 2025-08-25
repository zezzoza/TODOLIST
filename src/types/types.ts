export type Todo = {
    id: string
    userId: number
    title: string
    completed: boolean
    important: "Very" | "Medium" | "Low"
}
export type Important = Todo["important"]
