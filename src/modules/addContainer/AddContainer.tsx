"use client"
import React, { useState } from "react"
import s from "./addContainer.module.css"
import { fetchAddTodo } from "@/fetch/fetchAddTodo"
import { Important, Todo } from "@/types/types"
import ModalAddImportant from "../modalAddImportant/ModalAddImportant"

const AddContainer = ({
    idUser,
    refetch,
}: {
    idUser: number
    refetch: () => void
}) => {
    const [value, setValue] = useState("")
    const [important, setImportant] = useState<Important>("Low")
    const [isOpen, setIsOpen] = useState(false)

    function onOpen() {
        if (!value.trim()) {
            alert("Введите задачу")
            return
        }
        setIsOpen(true)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onOpen()
        }
    }

    async function addTodo() {
        const todo: Omit<Todo, "id"> = {
            userId: idUser,
            title: value,
            completed: false,
            important: important,
        }

        await fetchAddTodo(todo)
        setValue("")
        setIsOpen(false)
        refetch()
    }

    return (
        <div className={s.container}>
            <h1 className={s.h1}>TODOLIST</h1>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyPress}
                type="text"
                placeholder="Введите задачу"
                className={s.inputTask}
            />
            <button className={s.button} onClick={onOpen}>
                Создать задачу
            </button>
            <ModalAddImportant
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                important={important}
                setImportant={setImportant}
                addTodo={addTodo}
            />
        </div>
    )
}

export default AddContainer
