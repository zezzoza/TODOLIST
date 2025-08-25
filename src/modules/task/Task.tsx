"use client"
import React from "react"
import s from "./task.module.css"
import { fetchDeleteTodo } from "@/fetch/fetchDeleteTodo"
import { fetchPut } from "@/fetch/fetchPutTodo"

const Task = ({
    id,
    title,
    completed,
    refetch,
    onOpen,
}: {
    id: string
    title: string
    completed: boolean
    refetch: () => void
    onOpen?: (id: string) => void
}) => {
    const { deleteTask } = fetchDeleteTodo(id)

    async function onRemoveTask(e: React.MouseEvent<Element, MouseEvent>) {
        await deleteTask(e)
        refetch()
    }

    async function onPutTask() {
        await fetchPut(id)
        refetch()
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
