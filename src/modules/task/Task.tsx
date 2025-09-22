"use client"
import React from "react"
import s from "./task.module.css"
import {
    useDeleteTodoMutation,
    useMakeCompletedTodoMutation,
} from "@/redux/service/mockApiData"

const Task = ({
    id,
    title,
    completed,
    onOpen,
}: {
    id: string
    title: string
    completed: boolean
    onOpen?: (id: string) => void
}) => {
    const [deleteTodo, { isError }] = useDeleteTodoMutation()
    const [makeCompleted] = useMakeCompletedTodoMutation()

    async function onRemoveTask() {
        try {
            await deleteTodo(id)
        } catch (error) {
            console.error(error)
        }
    }

    async function onPutTask() {
        await makeCompleted(id)
    }

    return (
        <div className={completed ? `${s.task} ${s.comlited}` : s.task}>
            <div className={s.mainInfo}>
                <p className={s.taskText}>{title}</p>
                {completed ? (
                    <div className={s.action} onClick={onRemoveTask}>
                        ✕
                    </div>
                ) : (
                    <>
                        <div
                            className={s.action}
                            onClick={() => onOpen && onOpen(id)}
                        >
                            ☰
                        </div>
                        <div className={s.action} onClick={onPutTask}>
                            🗸
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default React.memo(Task)
