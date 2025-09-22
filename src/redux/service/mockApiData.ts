import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"

interface Todo {
    id: string
    userId: number
    title: string
    completed: boolean
    important: "Very" | "Medium" | "Low"
}

export const todosApi = createApi({
    reducerPath: "todos",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://68a80668bb882f2aa6dd2680.mockapi.io",
    }),
    tagTypes: ["Todo"],
    endpoints: (builder) => ({
        getAllTodos: builder.query<Todo[], number>({
            query: (idUser) => `/todos?userId=${idUser}`,
            providesTags: ["Todo"],
        }),
        addNewTodo: builder.mutation<Todo, Partial<Todo>>({
            query: (newTodo) => ({
                url: "/todos",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: newTodo,
            }),
            invalidatesTags: ["Todo"],
        }),
        deleteTodo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todo"],
        }),
        updateImportantTodo: builder.mutation<
            Todo,
            { id: string; value: "Very" | "Medium" | "Low" }
        >({
            query: ({ id, value }) => ({
                url: `/todos/${id}`,
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: { important: value },
            }),
            invalidatesTags: ["Todo"],
        }),
        makeCompletedTodo: builder.mutation<Todo, string>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: { completed: true },
            }),
            invalidatesTags: ["Todo"],
        }),
    }),
})
export const {
    useAddNewTodoMutation,
    useDeleteTodoMutation,
    useUpdateImportantTodoMutation,
    useMakeCompletedTodoMutation,
    useGetAllTodosQuery,
} = todosApi
