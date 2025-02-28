import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileCreateForm, ProfileData, ProfileEditTextFields } from "../../../types/entities/user.types";
import { OrderApi } from "../../../types/entities/order.types";
import { GetProfileFilledRes, ProfileCreateReq, ProfileCreateRes, ProfileGetRes, StorePushTokenReq, StorePushTokenRes } from "../../../types/api/user.api.types";
import { EMAIL } from "../../../rules/masks.rules";
import { AxiosResponse } from "axios";
import { UserApi } from "../../../http/api/user.api";
import { handleTokenRefreshedRequest } from "../../../utils/handleThunkAuth";
import { correctFormDate } from "../../../utils/correctFormDate";
import { err } from "react-native-svg/lib/typescript/xml";


type ProfileSliceState = {
    notifictaions_store: {
        sending: boolean,
        err: string
        success: boolean | null
    },
    creating_form: {
        sending: boolean
        err: string,
        disabled: boolean,
        gender: boolean,
        text_fields: ProfileCreateForm
    }
    has_profile: boolean | null
    has_docs: boolean | null
    push_token: string | null
    docs_url: string
    data: ProfileData,
    form: Omit<ProfileData, "bonus">,
    loadings: {
        profile: boolean
        orders: boolean
    }
}

const initialState: ProfileSliceState = {
    notifictaions_store: {
        sending: false,
        err: "",
        success: null
    },
    creating_form: {
        sending: false,
        err: "",
        disabled: true,
        gender: true,
        text_fields: {
            passport_numbers: "",
            first_name: "",
            last_name: "",
            subname: "",
            dob: "", // Дата рождения
            pob: "", // Место рождения
            passport_issue_date: "", // Дата выдачи паспорта
            passport_issued_by: "", // Кем выдан паспорт
            email: ""
        }
    },
    has_docs: null,
    has_profile: null,
    push_token: null,
    docs_url: "",
    data: {
        first_name: "",
        last_name: "",
        subname: "",
        dob: "",
        image: "",
        bonus: 0,
        gender: true
    },
    form: {
        first_name: "",
        last_name: "",
        subname: "",
        dob: "",
        image: "",
        gender: true
    },
    loadings: {
        profile: true,
        orders: false
    }
}

export const getProfile = createAsyncThunk(
    'profile/get',
    async (_, { dispatch }) => {
        const res: AxiosResponse<ProfileGetRes> = await handleTokenRefreshedRequest(null, UserApi.GetProfile)
        console.log("profile ", res.data);

        return res.data
        // return new Promise<ProfileData>((res, rej) => {
        //     setTimeout(() => {
        //         res({
        //             first_name: "Борис",
        //             last_name: "Борисов",
        //             subname: "Борисович",
        //             dob: "2000-11-11",
        //             image: "/",
        //             bonus: 3,
        //             gender: 1
        //         })
        //     }, 1000)
        // })
    }
)
export const createProfile = createAsyncThunk(
    'profile/create',
    async (req: ProfileCreateReq, { dispatch }) => {
        const res: AxiosResponse<ProfileCreateRes> = await handleTokenRefreshedRequest(null, UserApi.Create, req)
        if (!res.status) {
            throw new Error("Не удалось создать профиль!")
        }
        return res.data
    }
)
export const storePushToken = createAsyncThunk(
    'profile/notifications-token/store',
    async (req: StorePushTokenReq, { dispatch }) => {
        const res: AxiosResponse<StorePushTokenRes> = await handleTokenRefreshedRequest(null, UserApi.StorePushToken, req)
        if (!res.status) {
            throw new Error("Не удалось отправить push-токен!")
        }
        return res.data
    }
)
export const getHasProfile = createAsyncThunk(
    'has-profile/get',
    async (logout: any, { dispatch }) => {
        const res: AxiosResponse<GetProfileFilledRes> = await handleTokenRefreshedRequest(logout, UserApi.GetProfileFilled)
        //console.log(res.data);
        console.log(res);
    
       
        

        return res.data
        // return {
        //     id: 1,
        //     is_doc_signed: false,
        //     is_fill_fio: true,
        //     is_phone_confirm: true,
        //     status: true
        // } as GetProfileFilledRes
    }
)

export const ProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        handleProfileForm: (state, action: PayloadAction<{ key: keyof ProfileEditTextFields, val: string }>) => {
            const key = action.payload.key
            const val = action.payload.val

            if (key === "gender") {
                state.form[key] = Boolean(val)
                return
            }
            state.form[key] = val
        },
        handleCreateProfileGender: (state, action: PayloadAction<boolean>) => {
            state.creating_form.gender = action.payload
        },
        handleEditProfileGender: (state, action: PayloadAction<boolean>) => {
            state.form.gender = action.payload
        },
        handleCreateProfileForm: (state, action: PayloadAction<{ key: keyof typeof initialState.creating_form.text_fields, val: string }>) => {
            if (state.creating_form.err) {
                state.creating_form.err = ""
            }
            const key = action.payload.key
            let val = action.payload.val
            const tempCreatingForm: typeof initialState.creating_form.text_fields = JSON.parse(JSON.stringify(state.creating_form.text_fields))

            if (key === "dob" || "passport_issue_date") {
                val = correctFormDate(val)
            }
            tempCreatingForm[key] = val
            state.creating_form.text_fields = tempCreatingForm
            const datesAreValid = tempCreatingForm.dob.length === 10 && tempCreatingForm.passport_issue_date.length === 10
            const pass = tempCreatingForm.passport_numbers.length === 11
            const allFieldsAreNotEmpty = Object.values(tempCreatingForm).every((val) => val.length > 0)
            const emailIsValid = EMAIL.test(tempCreatingForm["email"])

            state.creating_form.disabled = !datesAreValid || !pass || !allFieldsAreNotEmpty || !emailIsValid
        },
        setDefaultProfileForm: state => {
            state.form = state.data
        },
        resetCreateProfileForm: state => {
            state.creating_form = initialState.creating_form
        },
        resetStorePushToken: state => {
            state.notifictaions_store = initialState.notifictaions_store
        },
        setHasDocs: (state, action: PayloadAction<boolean>) => {
            state.has_docs = action.payload
        },
        resetProfileData: state => {
            state.data = initialState.data
            state.form = initialState.form
            state.has_profile = initialState.has_profile
            state.push_token = initialState.push_token
        }
    },
    extraReducers: (builder) => {
        //HAS PROFILE
        builder.addCase(getHasProfile.pending, (state, action) => {
            console.log(`Ожидаем ответ от заполненности профиля`);
        })
        //HAS PROFILE
        builder.addCase(getHasProfile.fulfilled, (state, action) => {
            console.log(`Профиль заполнен: ${action.payload.is_fill_fio}`);
            state.has_profile = action.payload.is_fill_fio
            state.has_docs = action.payload.is_doc_signed
            state.push_token = action.payload.push_token
        })
        builder.addCase(getHasProfile.rejected, (state, action) => {
            console.log(action.error);
        })
        //PROFILE
        builder.addCase(getProfile.pending, (state, action) => {
            state.loadings.profile = true
        })
        builder.addCase(getProfile.fulfilled, (state, action) => {
            console.log(action.payload);

            state.data = action.payload
            state.form = action.payload
            state.loadings.profile = false
        })
        builder.addCase(getProfile.rejected, (state, action) => {
            console.log(action.error);

            state.loadings.profile = false
        })
        //PROFILE CREATE
        builder.addCase(createProfile.pending, (state, action) => {
            state.creating_form.sending = true
        })
        builder.addCase(createProfile.fulfilled, (state, action) => {
            state.has_profile = action.payload.status
            state.docs_url = action.payload.url
            state.creating_form.sending = false
        })
        builder.addCase(createProfile.rejected, (state, action) => {
            state.creating_form.err = "Не удалось создать профиль!"
            state.creating_form.sending = false
        })
        //PROFILE PUSH TOKEN STORE
        builder.addCase(storePushToken.pending, (state, action) => {
            state.notifictaions_store.sending = true
            if (state.notifictaions_store.err) {
                state.notifictaions_store.err = ""
            }
        })
        builder.addCase(storePushToken.fulfilled, (state, action) => {
            state.notifictaions_store.success = action.payload.status
            state.notifictaions_store.sending = false
        })
        builder.addCase(storePushToken.rejected, (state, action) => {
            state.notifictaions_store.err = "Не удалось создать профиль!"
            state.notifictaions_store.sending = false
            state.notifictaions_store.success = false
        })
    },
})

export const {
    handleProfileForm,
    handleCreateProfileForm,
    handleCreateProfileGender,
    resetCreateProfileForm,
    setHasDocs,
    handleEditProfileGender,
    setDefaultProfileForm,
    resetStorePushToken,
    resetProfileData
} = ProfileSlice.actions


export const profileReducer = ProfileSlice.reducer