import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type RestorePasswordSliceType = {
    success: boolean | null
    error: string
    data: {
        phone: string
    }
}

const initialState: RestorePasswordSliceType = {
    success: null,
    error: "",
    data: {
        phone: "",
    }
}


export const RestorePasswordSlice = createSlice({
    name: "restore-password",
    initialState,
    reducers: {
        handleRestoreForm: (state, action: PayloadAction<{ key: keyof typeof initialState.data, val: string }>) => {
            if (state.error) {
                state.error = ""
            }
            state.data[action.payload.key] = action.payload.val
        },
        resetRestoreForm: (state) => {
            state.success = initialState.success
            state.error = initialState.error
            state.data = initialState.data
        },

    },
    extraReducers: (builder) => {

    },
})

export const {
    handleRestoreForm,
    resetRestoreForm,
} = RestorePasswordSlice.actions


export const restorePasswordReducer = RestorePasswordSlice.reducer