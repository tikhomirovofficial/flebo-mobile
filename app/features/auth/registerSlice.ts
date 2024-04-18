import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type RegisterSliceType = {
    success: boolean | null
    error: string
    data: {
        phone: string
        password: string
    }
}

const initialState: RegisterSliceType = {
    success: null,
    error: "",
    data: {
        phone: "",
        password: ""
    }
}


export const RegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        handleRegisterForm: (state, action: PayloadAction<{ key: keyof typeof initialState.data, val: string }>) => {
            if (state.error) {
                state.error = ""
            }
            state.data[action.payload.key] = action.payload.val
        },
        resetRegisterForm: (state) => {
            state.success = initialState.success
            state.error = initialState.error
            state.data = initialState.data
        },

    },
    extraReducers: (builder) => {

    },
})

export const {
    handleRegisterForm,
    resetRegisterForm,
} = RegisterSlice.actions


export const registerReducer = RegisterSlice.reducer