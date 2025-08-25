import { Todo } from "@/types/types"
import { useEffect, useState } from "react"

export function fetchGetTodos(idUser: number) {
    const [todos, setTodos] = useState<Todo[]>([])

    const fetchTodos = async () => {
        try {
            const response = await fetch(
                `https://68a80668bb882f2aa6dd2680.mockapi.io/todos?userId=${idUser}`,
            )

            const data = await response.json()
            setTodos(data)
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "Неизвестная ошибка"
            console.error("Ошибка загрузки:", errorMessage)
        } finally {
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [idUser])

    const refetch = () => {
        fetchTodos()
    }

    return { todos, refetch }
}
