import React from "react"
import s from "./modalChangeImportant.module.css"
import { createPortal } from "react-dom"
import { Important } from "@/types/types"

const ModalChangeImportant = ({
    isOpen,
    onClose,
    handleChangeImportant,
}: {
    isOpen: boolean
    onClose: () => void
    handleChangeImportant: (value: Important) => Promise<void>
}) => {
    const importantValues: Important[] = ["Very", "Medium", "Low"]

    if (!isOpen) return null
    return createPortal(
        <div className={s.modalOverlay} onClick={onClose}>
            <div
                className={s.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Измените важность</h2>
                <div className={s.buttonsContainer}>
                    {importantValues.map((option) => (
                        <button
                            key={option}
                            className={s.optionButton}
                            onClick={() => handleChangeImportant(option)}
                        >
                            {option} Important
                        </button>
                    ))}
                </div>
                <div className={s.close} onClick={onClose}>
                    ✕
                </div>
            </div>
        </div>,
        document.body,
    )
}

export default ModalChangeImportant
