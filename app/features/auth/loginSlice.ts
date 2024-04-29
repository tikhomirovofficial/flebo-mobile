import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { UserApi } from "../../../http/api/user.api";
import { storeTokens } from "../../../utils/auth/storeTokens";
import { LoginReq, LoginRes } from "../../../types/api/user.api.types";

type LoginSliceType = {
    access_token: string
    token: {
        valid: boolean,
        checking: boolean
    },
    success: boolean | null
    loading: boolean,
    error: string,
    data: {
        phone: string
        password: string
    }
}

const initialState: LoginSliceType = {
    access_token: "",
    token: {
        checking: true,
        valid: true
    },
    success: null,
    loading: false,
    error: "",
    data: {
        phone: "+7",
        password: ""
    }
}

export const sendLogin = createAsyncThunk(
    'login/code',
    async (req: LoginReq, { dispatch }) => {
        console.log(req);

        // const res: AxiosResponse<LoginRes> = await UserApi.Login(req)
        // if (!res.data) {
        //     throw new Error("Ошибка сервера!")
        // }
        // if (res.status === 401) {
        //     throw new Error("Неверный код!")
        // }
        // await storeTokens({ refresh: res.data.refresh, access: res.data.access })
        // return res.data
        return new Promise<LoginRes>((res, rej) => {
            setTimeout(() => {
                res({
                    access: "",
                    refresh: ""
                })
            }, 1000)
        })

    }
)

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
        builder.addCase(sendLogin.pending, (state, action) => {
            state.loading = true
            state.success = null
            state.error = ""
        })
        //SAVE TOKENS
        builder.addCase(sendLogin.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.token.valid = true
            state.data = initialState.data

        })
        builder.addCase(sendLogin.rejected, (state, action) => {
            const isBadCode = action.error.code === "ERR_BAD_REQUEST"
            state.loading = false
            state.success = false
            state.error = String(isBadCode ? "Неверный код" : action.error.message)
        })
    },
})

export const {
    handleLoginForm,
    resetLoginForm,
} = LoginSlice.actions


export const loginReducer = LoginSlice.reducer