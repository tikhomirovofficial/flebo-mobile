import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from '../features/auth/loginSlice'
import { restorePasswordReducer } from '../features/auth/restorePasswordSlice'
import { registerReducer } from '../features/auth/registerSlice'
import { modalsReducer } from '../features/modals/modalsSlice'
import { profileReducer } from '../features/profile/profileSlice'
import { doctorsReducer } from '../features/doctors/doctorsSlice'
import { documentsReducer } from '../features/documents/documentsSlice'
import { doctorReducer } from '../features/doctors/doctorSlice'
import { historyReducer } from '../features/history/historySlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        restorePassword: restorePasswordReducer,
        modals: modalsReducer,
        profile: profileReducer,
        doctors: doctorsReducer,
        doctor: doctorReducer,
        documents: documentsReducer,
        history: historyReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch