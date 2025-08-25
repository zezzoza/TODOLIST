export function fetchDeleteTodo(id: string) {
    const deleteTask = async (event: React.MouseEvent) => {
        event.stopPropagation()

        try {
            await fetch(
                `https://68a80668bb882f2aa6dd2680.mockapi.io/todos/${id}`,
                {
                    method: "DELETE",
                },
            )
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : "Неизвестная ошибка"
            console.error("Ошибка при удалении задачи:", errorMessage)
        }
    }

    return { deleteTask }
}
