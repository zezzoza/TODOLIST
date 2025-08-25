import React from "react"
import s from "./comletedTask.module.css"
import { Todo } from "@/types/types"
import Task from "../task/Task"

const CompletedTask = ({
    todos,
    refetch,
}: {
    todos: Todo[]
    refetch: () => void
}) => {
    return (
        <div className={s.container}>
            <h2 className={s.h2}>COMLETED</h2>
            <div className={s.tasksContainer}>
                {todos.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed}
                        refetch={refetch}
                    />
                ))}
            </div>
        </div>
    )
}

export default CompletedTask
