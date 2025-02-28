import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PatientApi } from "../../../types/entities/patients.types";
import { CreateOrderReq, CreateOrderRes } from "../../../types/api/orders.api.types";
import { OrdersApi } from "../../../http/api/orders.api";
import { handleTokenRefreshedRequest } from "../../../utils/handleThunkAuth";
import { AxiosResponse } from "axios";
import { createInviting } from "../inviting/invitingSlice";

type PatientOrderData = Pick<PatientApi, "id" | "first_name" | "last_name">

type OrderSliceState = {
    patientData: PatientOrderData
    currentCategorySelected: number,
    success: boolean | null,
    sending: boolean
    err: string,
    bonuses: {
        percent: number,
        order_total: number
    }
}

const initialState: OrderSliceState = {
    success: null,
    sending: false,
    patientData: {
        id: -1,
        first_name: "",
        last_name: ""
    },
    err: "",
    bonuses: {
        percent: 10,
        order_total: 0
    },
    currentCategorySelected: -1
}
// export const createOrder = createAsyncThunk(
//     'order/create',
//     async (req: InvitingCreateReq, { dispatch }) => {
//         const resp: InvitingCreateRes = { status: true }
//         if (!resp.status) {
//             throw new Error("Не удалось добавить пациента!")
//         }
//         return new Promise<InvitingCreateRes>((res, rej) => {
//             setTimeout(() => {
//                 res(resp)
//             }, 1000)
//         })
//     }
// )
export const createOrder = createAsyncThunk(
    'order/create',
    async (req: CreateOrderReq, { dispatch }) => {
        const res: AxiosResponse<CreateOrderRes> = await handleTokenRefreshedRequest(null, OrdersApi.Create, req)
        if (!res.status) {
            throw new Error("Не удалось создать заказ.")
        }
        return res.data
        // return new Promise<InvitingCreateRes>((res, rej) => {
        //     setTimeout(() => {
        //         res(resp)
        //     }, 1000)
        // })
    }
)

export const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        resetOrderErr(state) {
            state.err = ""
        },
        setOrderBonusesTotal(state, action: PayloadAction<number>) {
            state.bonuses.order_total = action.payload
        },
        resetOrderBonusesTotal(state) {
            state.bonuses.order_total = initialState.bonuses.order_total
        },
        setPatient(state, action: PayloadAction<PatientOrderData>) {
            state.patientData = action.payload
        },
        setCurrentCategory(state, action: PayloadAction<number>) {
            state.currentCategorySelected = action.payload
        },
        resetPatient(state) {
            state.patientData = initialState.patientData
        }
    },
    extraReducers(builder) {
        //ORDER CREATE
        builder.addCase(createOrder.pending, (state, action) => {
            if (state.err) {
                state.err = ""
            }
            state.sending = true
            state.success = null
        })
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.sending = false
            state.success = true
        })
        builder.addCase(createOrder.rejected, (state, action) => {
            state.err = "Не удалось создать заказ!"
            state.sending = false
            state.success = false
        })
    },
})
export const {
    setPatient,
    setCurrentCategory,
    resetPatient,
    resetOrderErr,
    resetOrderBonusesTotal,
    setOrderBonusesTotal
} = OrderSlice.actions

export const orderReducer = OrderSlice.reducer