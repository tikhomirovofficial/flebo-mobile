import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginSliceType = {
    success: boolean | null
    error: string
    data: {
        phone: string
        password: string
    }
}

const initialState: LoginSliceType = {
    success: null,
    error: "",
    data: {
        phone: "",
        password: ""
    }
}


export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        handleLoginForm: (state, action: PayloadAction<{ key: keyof typeof initialState.data, val: string }>) => {
            if (state.error) {
                state.error = ""
            }
            state.data[action.payload.key] = action.payload.val
        },
        resetLoginForm: (state) => {
            state.success = initialState.success
            state.error = initialState.error
            state.data = initialState.data
        },

    },
    extraReducers: (builder) => {

    },
})

export const {
    handleLoginForm,
    resetLoginForm,
} = LoginSlice.actions


export const loginReducer = LoginSlice.reducer