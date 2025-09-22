import React from "react"
import s from "./subTasksContainer.module.css"
import { Todo } from "@/types/types"
import Task from "@/modules/task/Task"

const SubTasksContainer = ({
    todos,
    title,
    onOpen,
}: {
    todos: Todo[] | undefined
    title: string
    onOpen: (id: string) => void
}) => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.h2}>{title} Imp.</h2>
            {todos?.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    completed={task.completed}
                    onOpen={onOpen}
                />
            ))}
        </div>
    )
}

export default SubTasksContainer
