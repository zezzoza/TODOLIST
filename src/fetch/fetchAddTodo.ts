import { Todo } from "@/types/types"

export async function fetchAddTodo(todo: Omit<Todo, "id">): Promise<void> {
    try {
        await fetch(`https://68a80668bb882f2aa6dd2680.mockapi.io/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: todo.title,
                completed: todo.completed,
                userId: todo.userId,
                important: todo.important,
            }),
        })
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Неизвестная ошибка"
        console.error("Ошибка загрузки:", errorMessage)
    }
}
