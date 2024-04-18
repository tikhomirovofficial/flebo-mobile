import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from '../features/auth/loginSlice'
import { restorePasswordReducer } from '../features/auth/restorePasswordSlice'
import { registerReducer } from '../features/auth/registerSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        restorePassword: restorePasswordReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch