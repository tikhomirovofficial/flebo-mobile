import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HasPagination } from "../../../types/common.types";
import { AxiosResponse } from "axios";

import { AllDoctorsGetReq, AllDoctorsGetRes } from "../../../types/api/doctors.api.types";
import { DoctorApi } from "../../../types/entities/doctors.types";
import { DocumentApi } from "../../../types/entities/documents.types";
import { AllDocumentsGetReq, AllDocumentsGetRes } from "../../../types/api/documents.api.types";


type DocumentsSliceSection = {
    items: DocumentApi[]
    loading: boolean
} & HasPagination

type DocumentsSliceState = {
    all: DocumentsSliceSection
}

const initialState: DocumentsSliceState = {
    all: {
        items: [],
        loading: false,
        part: 0,
        part_loading: false,
        can_next: true
    }
}
export const getAllDocuments = createAsyncThunk(
    'documents/get',
    async (req: AllDocumentsGetReq, { dispatch }) => {
        // const preparedReq: PatientsDocumentGetReq = {
        //     part: req.part || 1
        // }
        // const res: AxiosResponse<PatientsDocumentGetRes> = await handleTokenRefreshedRequest(null, PatientsApi.GetAll, preparedReq)
        // console.log(res.data);
        // return res.data
        return new Promise<AllDocumentsGetRes>((res, rej) => {
            setTimeout(() => {
                res({
                    status: true,
                    can_next: true,
                    docx: [
                        {
                            created: "2023-11-03T14:41:16.467",
                            name: "Тестовая А.А. 1990 мал. таз",
                            id: 1,
                            url: "https://example.com/files/public/AQluJPyim3tSYnU983nBViqHV.docx"
                        },
                    ]
                })
            }, 1000)
        })
    }
)

export const DocumentsSlice = createSlice({
    name: "documents",
    initialState,
    reducers: {
        resetAllDocuments(state) {
            state.all = initialState.all
        },

        incrementDocumentsPart: state => {
            state.all.part += 1
        }

    },
    extraReducers: (builder) => {
        //DOCUMENTS PAGE
        builder.addCase(getAllDocuments.pending, (state, action) => {
            if (state.all.part > 1) {
                state.all.part_loading = true
                return
            }
            state.all.loading = true
        })
        builder.addCase(getAllDocuments.fulfilled, (state, action) => {
            state.all.items = [...state.all.items, ...action.payload.docx]
            state.all.can_next = action.payload.can_next
            state.all.loading = false
            if (state.all.part === 0) {
                state.all.part = 1
            }
        })
        builder.addCase(getAllDocuments.rejected, (state, action) => {
            state.all.loading = false
        })

    },
})

export const {
    resetAllDocuments,
    incrementDocumentsPart
} = DocumentsSlice.actions


export const documentsReducer = DocumentsSlice.reducer