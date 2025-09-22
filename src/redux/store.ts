import { setupListeners } from "@reduxjs/toolkit/query"
import { configureStore } from "@reduxjs/toolkit"
import { todosApi } from "./service/mockApiData"

export const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (GetDefaultMiddleware) =>
        GetDefaultMiddleware().concat(todosApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
