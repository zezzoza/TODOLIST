"use client"
import React, { useMemo, useState } from "react"
import s from "./taskContainer.module.css"
import { Important } from "@/types/types"
import SubTasksContainer from "./subTasksContainer/SubTasksContainer"
import ModalChangeImportant from "../modalChangeImportant.tsx/ModalChangeImportant"
import {
    useGetAllTodosQuery,
    useUpdateImportantTodoMutation,
} from "@/redux/service/mockApiData"

const TaskContainer = ({ idUser }: { idUser: number }) => {
    const { data, isSuccess } = useGetAllTodosQuery(idUser)
    const [updateImportantTodo] = useUpdateImportantTodoMutation()
    const [taskId, setTaskId] = useState<string>("")
    const [isOpenModal, setIsOpenModal] = useState(false)

    const notCompletedTask = useMemo(
        () => data?.filter((task) => !task.completed),
        [data],
    )

    const veryImpTasks = useMemo(
        () => notCompletedTask?.filter((task) => task.important === "Very"),
        [data],
    )

    const mediumImpTasks = useMemo(
        () => notCompletedTask?.filter((task) => task.important === "Medium"),
        [data],
    )

    const lowImpTasks = useMemo(
        () => notCompletedTask?.filter((task) => task.important === "Low"),
        [data],
    )

    function getIdTaskandOpenModal(id: string) {
        setTaskId(id)
        setIsOpenModal(true)
    }

    async function handleChangeImportant(value: Important) {
        await updateImportantTodo({ id: taskId, value })
        setIsOpenModal(false)
    }

    if (data?.length == 0) {
        return <div className={s.loading}>Пока нет задач</div>
    }
    if (isSuccess) {
        return (
            <div className={s.taskContainer}>
                <div className={s.subTaskWrapper}>
                    <SubTasksContainer
                        todos={lowImpTasks}
                        title={"Low"}
                        onOpen={getIdTaskandOpenModal}
                    />
                    <SubTasksContainer
                        todos={mediumImpTasks}
                        title={"Medium"}
                        onOpen={getIdTaskandOpenModal}
                    />
                    <SubTasksContainer
                        todos={veryImpTasks}
                        title={"Very"}
                        onOpen={getIdTaskandOpenModal}
                    />
                </div>
                <ModalChangeImportant
                    isOpen={isOpenModal}
                    onClose={() => setIsOpenModal(false)}
                    handleChangeImportant={handleChangeImportant}
                />
            </div>
        )
    }
}

export default TaskContainer
