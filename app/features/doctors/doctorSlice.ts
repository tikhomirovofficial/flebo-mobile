import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HasPagination } from "../../../types/common.types";
import { AxiosResponse } from "axios";

import { AllDoctorsGetReq, AllDoctorsGetRes, DoctorByIdGetReq, DoctorByIdGetRes } from "../../../types/api/doctors.api.types";
import { DoctorApi } from "../../../types/entities/doctors.types";


type DoctorsSliceState = {
    doctor: {}
    loading: boolean
}

const initialState: DoctorsSliceState = {
    doctor: {},
    loading: true,
}

export const getDoctorById = createAsyncThunk(
    'doctor/get-by-id',
    async (req: DoctorByIdGetReq, { dispatch }) => {
        return new Promise<DoctorByIdGetRes>((res, rej) => {
            setTimeout(() => {
                res({
                    status: true,
                    doctor: {
                        id: 1,
                        id_room: 2,
                        slong: 3,
                        first_name: "Сас",
                        last_name: "Сасов",
                        flong: 3,
                        middle_name: "Сасович",
                        active: true,
                        tags: []
                    }
                })
            }, 1000)
        })
    }
)

export const DoctorSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //DOCTORS PAGE
        builder.addCase(getDoctorById.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getDoctorById.fulfilled, (state, action) => {
            state.loading = false

        })
        builder.addCase(getDoctorById.rejected, (state, action) => {
            state.loading = false
        })

    },
})

export const {

} = DoctorSlice.actions


export const doctorReducer = DoctorSlice.reducer