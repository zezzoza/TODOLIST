import { Important } from "@/types/types"

export async function fetchPutImportant(id: string, value: Important) {
    await fetch(`https://68a80668bb882f2aa6dd2680.mockapi.io/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            important: value,
        }),
    })
}
