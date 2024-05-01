import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HasPagination } from "../../../types/common.types";
import { AxiosResponse } from "axios";

import { AllDoctorsGetReq, AllDoctorsGetRes } from "../../../types/api/doctors.api.types";
import { DoctorApi } from "../../../types/entities/doctors.types";


type DoctorsSliceSection = {
    items: DoctorApi[]
    loading: boolean
} & HasPagination

type DoctorsSliceState = {
    all: DoctorsSliceSection
    order: DoctorsSliceSection
}

const initialState: DoctorsSliceState = {
    all: {
        items: [],
        loading: false,
        part: 0,
        part_loading: false,
        can_next: true
    },
    order: {
        items: [],
        loading: false,
        part: 0,
        part_loading: false,
        can_next: true
    }
}
const thunkGetDoctors = async (req: AllDoctorsGetReq) => {
    // const preparedReq: PatientsDoctorGetReq = {
    //     part: req.part || 1
    // }
    // const res: AxiosResponse<PatientsDoctorGetRes> = await handleTokenRefreshedRequest(null, PatientsApi.GetAll, preparedReq)
    // console.log(res.data);
    // return res.data
    return new Promise<AllDoctorsGetRes>((res, rej) => {
        setTimeout(() => {
            res({
                status: true,
                can_next: true,
                doctors: [
                    {
                        active: false,
                        first_name: "Екатерина",
                        flong: 30,
                        id: 2,
                        id_room: 2,
                        last_name: "Тестова1",
                        middle_name: "Александровна",
                        slong: 30,
                        tags: [
                            {
                                id: 1,
                                text: "Сердце"
                            }
                        ]
                    },
                ]
            })
        }, 1000)
    })
}
export const getAllDoctors = createAsyncThunk(
    'doctors/get',
    async (req: AllDoctorsGetReq, { dispatch }) => {
        const res = await thunkGetDoctors(req)
        return res
    }
)

export const DoctorsSlice = createSlice({
    name: "doctors",
    initialState,
    reducers: {
        resetAllDoctors(state) {
            state.all = initialState.all
        },
        resetOrderDoctors(state) {
            state.order = initialState.order
        },
        incrementDoctorsPart: state => {
            state.all.part += 1
        },
        incrementSearchedDoctorsPart: state => {
            state.order.part += 1
        },

    },
    extraReducers: (builder) => {
        //DOCTORS PAGE
        builder.addCase(getAllDoctors.pending, (state, action) => {
            if (state.all.part > 1) {
                state.all.part_loading = true
                return
            }
            state.all.loading = true
        })
        builder.addCase(getAllDoctors.fulfilled, (state, action) => {
            state.all.items = [...state.all.items, ...action.payload.doctors]
            state.all.can_next = action.payload.can_next
            state.all.loading = false
            if (state.all.part === 0) {
                state.all.part = 1
            }
        })
        builder.addCase(getAllDoctors.rejected, (state, action) => {
            state.all.loading = false
        })

    },
})

export const {
    resetAllDoctors,
    resetOrderDoctors,
    incrementDoctorsPart,
    incrementSearchedDoctorsPart
} = DoctorsSlice.actions


export const doctorsReducer = DoctorsSlice.reducer