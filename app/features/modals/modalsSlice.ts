import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profileEditModal: true,
}
export const ModalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        handleProfileEditModal: (state) => { state.profileEditModal = !state.profileEditModal },
    }
})

export const {
    handleProfileEditModal,
} = ModalsSlice.actions

export const modalsReducer = ModalsSlice.reducer
