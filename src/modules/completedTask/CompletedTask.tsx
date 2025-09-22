import React, { useMemo } from "react"
import s from "./comletedTask.module.css"
import Task from "../task/Task"
import { useGetAllTodosQuery } from "@/redux/service/mockApiData"

const CompletedTask = ({ idUser }: { idUser: number }) => {
    const { data } = useGetAllTodosQuery(idUser)

    const completedTask = useMemo(
        () => data?.filter((task) => task.completed),
        [data],
    )
    return (
        <div className={s.container}>
            <h2 className={s.h2}>COMLETED</h2>
            <div className={s.tasksContainer}>
                {completedTask?.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed}
                    />
                ))}
            </div>
        </div>
    )
}

export default CompletedTask
