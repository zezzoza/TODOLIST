"use client"
import TaskContainer from "@/modules/taskContainer/TaskContainer"
import s from "./page.module.css"
import AddContainer from "@/modules/addContainer/AddContainer"
import CompletedTask from "@/modules/completedTask/CompletedTask"
import { Provider } from "react-redux"
import { store } from "@/redux/store"

export default function Home() {
    const idUser = 1

    return (
        <div className={s.page}>
            <Provider store={store}>
                <AddContainer idUser={idUser} />
                <TaskContainer idUser={idUser} />
                <CompletedTask idUser={idUser} />
            </Provider>
        </div>
    )
}
