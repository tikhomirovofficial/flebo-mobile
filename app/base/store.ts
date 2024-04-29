import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from '../features/auth/loginSlice'
import { restorePasswordReducer } from '../features/auth/restorePasswordSlice'
import { registerReducer } from '../features/auth/registerSlice'
import { modalsReducer } from '../features/modals/modalsSlice'
import { profileReducer } from '../features/profile/profileSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        restorePassword: restorePasswordReducer,
        modals: modalsReducer,
        profile: profileReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch