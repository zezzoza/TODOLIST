"use client"
import TaskContainer from "@/modules/taskContainer/TaskContainer"
import s from "./page.module.css"
import AddContainer from "@/modules/addContainer/AddContainer"
import { fetchGetTodos } from "@/fetch/fetchGetTodos"
import CompletedTask from "@/modules/completedTask/CompletedTask"
import { useMemo } from "react"

export default function Home() {
    const idUser = 1
    const { todos, refetch } = fetchGetTodos(idUser)

    const notCompletedTask = useMemo(
        () => todos.filter((task) => !task.completed),
        [todos],
    )

    const completedTask = useMemo(
        () => todos.filter((task) => task.completed),
        [todos],
    )

    return (
        <div className={s.page}>
            <AddContainer idUser={idUser} refetch={refetch} />
            <TaskContainer todos={notCompletedTask} refetch={refetch} />
            <CompletedTask todos={completedTask} refetch={refetch} />
        </div>
    )
}
