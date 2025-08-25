"use client"
import React, { useMemo, useState } from "react"
import s from "./taskContainer.module.css"
import { Important, Todo } from "@/types/types"
import SubTasksContainer from "./subTasksContainer/SubTasksContainer"
import { fetchPutImportant } from "@/fetch/fetchPutImporatnt"
import ModalChangeImportant from "../modalChangeImportant.tsx/ModalChangeImportant"

const TaskContainer = ({
    todos,
    refetch,
}: {
    todos: Todo[]
    refetch: () => void
}) => {
    const [taskId, setTaskId] = useState<string>("")
    const [isOpenModal, setIsOpenModal] = useState(false)

    const veryImpTasks = useMemo(
        () => todos.filter((task) => task.important === "Very"),
        [todos],
    )

    const mediumImpTasks = useMemo(
        () => todos.filter((task) => task.important === "Medium"),
        [todos],
    )

    const lowImpTasks = useMemo(
        () => todos.filter((task) => task.important === "Low"),
        [todos],
    )

    function getIdTaskandOpenModal(id: string) {
        setTaskId(id)
        setIsOpenModal(true)
    }

    async function handleChangeImportant(value: Important) {
        await fetchPutImportant(taskId, value)
        setIsOpenModal(false)
        refetch()
    }

    if (todos.length == 0)
        return <div className={s.loading}>Пока нет задач</div>
    return (
        <div className={s.taskContainer}>
            <div className={s.subTaskWrapper}>
                <SubTasksContainer
                    todos={veryImpTasks}
                    refetch={refetch}
                    title={"Very"}
                    onOpen={getIdTaskandOpenModal}
                />
                <SubTasksContainer
                    todos={mediumImpTasks}
                    refetch={refetch}
                    title={"Medium"}
                    onOpen={getIdTaskandOpenModal}
                />
                <SubTasksContainer
                    todos={lowImpTasks}
                    refetch={refetch}
                    title={"Low"}
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

export default TaskContainer
