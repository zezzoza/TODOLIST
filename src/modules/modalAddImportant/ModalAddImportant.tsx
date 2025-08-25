import React from "react"
import s from "./modalAddImportant.module.css"
import { createPortal } from "react-dom"
import { Important } from "@/types/types"

const ModalAddImportant = ({
    isOpen,
    onClose,
    important,
    setImportant,
    addTodo,
}: {
    isOpen: boolean
    onClose: () => void
    important: Important
    setImportant: (option: Important) => void
    addTodo?: () => Promise<void>
}) => {
    const importantValues: Important[] = ["Very", "Medium", "Low"]

    if (!isOpen) return null
    return createPortal(
        <div className={s.modalOverlay} onClick={onClose}>
            <div
                className={s.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Выберите важность</h2>
                <div className={s.buttonsContainer}>
                    {importantValues.map((option) => (
                        <button
                            key={option}
                            className={
                                important == option
                                    ? `${s.optionButton} ${s.optionChanged}`
                                    : `${s.optionButton}`
                            }
                            onClick={() => setImportant(option)}
                        >
                            {option} Important
                        </button>
                    ))}
                </div>
                <div className={s.close} onClick={onClose}>
                    ✕
                </div>

                <button className={s.create} onClick={addTodo}>
                    Создать задачу
                </button>
            </div>
        </div>,
        document.body,
    )
}

export default ModalAddImportant
