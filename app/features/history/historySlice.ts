import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HasPagination } from "../../../types/common.types";


type HistorySliceSection = {
    items: { id: number, name: string }[]
    loading: boolean
} & HasPagination

type HistorySliceState = {
    all: HistorySliceSection
}

const initialState: HistorySliceState = {
    all: {
        items: [],
        loading: false,
        part: 0,
        part_loading: false,
        can_next: true
    }
}
export const getAllHistory = createAsyncThunk(
    'history/get',
    async (req: any, { dispatch }) => {
        // const preparedReq: PatientsDocumentGetReq = {
        //     part: req.part || 1
        // }
        // const res: AxiosResponse<PatientsDocumentGetRes> = await handleTokenRefreshedRequest(null, PatientsApi.GetAll, preparedReq)
        // console.log(res.data);
        // return res.data
        return new Promise<any>((res, rej) => {
            setTimeout(() => {
                res({
                    status: true,
                    can_next: true,
                    history: [
                        {
                            id: 1,
                            name: "Посещение первое"
                        },
                        {
                            id: 2,
                            name: "Посещение второе"
                        },
                        {
                            id: 2,
                            name: "Посещение третье"
                        },
                    ]
                })
            }, 1000)
        })
    }
)

export const HistorySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        resetHistory(state) {
            state.all = initialState.all
        },

        incrementHistoryPart: state => {
            state.all.part += 1
        }

    },
    extraReducers: (builder) => {
        //HISTORY PAGE
        builder.addCase(getAllHistory.pending, (state, action) => {
            if (state.all.part > 1) {
                state.all.part_loading = true
                return
            }
            state.all.loading = true
        })
        builder.addCase(getAllHistory.fulfilled, (state, action) => {
            state.all.items = [...state.all.items, ...action.payload.history]
            state.all.can_next = action.payload.can_next
            state.all.loading = false
            if (state.all.part === 0) {
                state.all.part = 1
            }
        })
        builder.addCase(getAllHistory.rejected, (state, action) => {
            state.all.loading = false
        })

    },
})

export const {
    resetHistory,
    incrementHistoryPart
} = HistorySlice.actions


export const historyReducer = HistorySlice.reducer