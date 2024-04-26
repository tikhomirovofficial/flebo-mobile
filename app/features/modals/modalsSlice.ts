import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profileEditModal: false,
    orderModal: !false,
}
export const ModalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        handleProfileEditModal: (state) => { state.profileEditModal = !state.profileEditModal },
        handleOrderModal: (state) => { state.orderModal = !state.orderModal },
    }
})

export const {
    handleProfileEditModal,
    handleOrderModal,
} = ModalsSlice.actions

export const modalsReducer = ModalsSlice.reducer
