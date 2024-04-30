import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileData, ProfileEditForm, ProfileEditTextFields } from "../../../types/entities/user.types";
import { GetProfileFilledRes, ProfileCreateReq, ProfileCreateRes, ProfileGetRes, StorePushTokenReq, StorePushTokenRes } from "../../../types/api/user.api.types";
import { AxiosResponse } from "axios";
import { UserApi } from "../../../http/api/user.api";
import { correctFormDate } from "../../../utils/forms/dates/correctFormDate";
import { EMAIL } from "../../../config/masks";


type ProfileSliceState = {
    errors: {
        edit_profile: string
    }
    has_profile: boolean | null
    data: ProfileData,
    form: Omit<ProfileData, "bonus">,
    edit_form: {
        gender: boolean,
        select_fields: {
            gender: number
            city: number
        },
        text_fields: ProfileEditTextFields
        state: {
            sending: boolean
            disabled: boolean
            err: string
        }
    },
    loadings: {
        profile: boolean
    }
}

const initialState: ProfileSliceState = {
    errors: {
        edit_profile: ""
    },
    has_profile: true,
    data: {
        first_name: "",
        last_name: "",
        subname: "",
        phone: "",
        dob: "",
        email: "",
        gender: true
    },
    edit_form: {
        gender: false,
        select_fields: {
            gender: 0,
            city: 0
        },
        text_fields: {
            first_name: "",
            email: "",
            last_name: "",
            subname: "",
            dob: "",
            password: ""
        },
        state: {
            sending: false,
            disabled: false,
            err: ""
        }
    },
    form: {
        first_name: "",
        email: "",
        last_name: "",
        subname: "",
        dob: "",
        phone: "",
        gender: true
    },
    loadings: {
        profile: true,
    }
}

export const getProfile = createAsyncThunk(
    'profile/get',
    async (_, { dispatch }) => {
        // const res: AxiosResponse<ProfileGetRes> = await handleTokenRefreshedRequest(null, UserApi.GetProfile)
        // console.log("profile ", res.data);
        // return res.data
        return new Promise<ProfileData>((res, rej) => {
            setTimeout(() => {
                res({
                    first_name: "Борис",
                    last_name: "Борисов",
                    phone: "79005001849",
                    subname: "Борисович",
                    email: "",
                    dob: "2000-11-11",
                    gender: true
                })
            }, 1000)
        })
    }
)
export const editProfile = createAsyncThunk(
    'profile/edit',
    async (_, { dispatch }) => {
        // const res: AxiosResponse<ProfileGetRes> = await handleTokenRefreshedRequest(null, UserApi.GetProfile)
        // console.log("profile ", res.data);
        // return res.data
        return new Promise<ProfileData>((res, rej) => {
            setTimeout(() => {
                res({
                    first_name: "Борис",
                    last_name: "Борисов",
                    phone: "79005001849",
                    subname: "Борисович",
                    email: "",
                    dob: "2000-11-11",
                    gender: true
                })
            }, 1000)
        })
    }
)
export const getHasProfile = createAsyncThunk(
    'has-profile/get',
    async (logout: any, { dispatch }) => {
        // const res: AxiosResponse<GetProfileFilledRes> = await handleTokenRefreshedRequest(logout, UserApi.GetProfileFilled)
        // //console.log(res.data);
        // console.log(res);
        // return res.data
        return new Promise<GetProfileFilledRes>((res, rej) => {
            setTimeout(() => {
                res({
                    id: 1,
                    is_doc_signed: false,
                    is_fill_fio: false,
                    is_phone_confirm: false,
                    push_token: ""
                } as GetProfileFilledRes)
            }, 1000)
        })
    }
)

export const ProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {

        handleEditProfileGender: (state, action: PayloadAction<boolean>) => {
            state.edit_form.gender = action.payload
        },
        handleEditProfileTextFields: (state, action: PayloadAction<{ key: keyof typeof initialState.edit_form.text_fields, val: string }>) => {
            if (state.errors.edit_profile) {
                state.errors.edit_profile = ""
            }
            const tempTextFields: typeof initialState.edit_form.text_fields = JSON.parse(JSON.stringify(state.edit_form.text_fields))
            const key = action.payload.key
            let val = action.payload.val

            if (key === "dob") {
                val = correctFormDate(val)
            }
            tempTextFields[key] = val
            state.edit_form.text_fields = tempTextFields
            const datesAreValid = tempTextFields.dob.length === 10
            const allFieldsAreNotEmpty = Object.values(tempTextFields).every((val) => val.length > 0)
            const emailIsValid = EMAIL.test(tempTextFields["email"])

            state.edit_form.state.disabled = !datesAreValid || !allFieldsAreNotEmpty || !emailIsValid
        },
        handleEditProfileSelectFields: (state, action: PayloadAction<{ key: keyof typeof initialState.edit_form.select_fields, val: number }>) => {
            if (state.errors.edit_profile) {
                state.errors.edit_profile = ""
            }
            const tempSelectFields: typeof initialState.edit_form.select_fields = JSON.parse(JSON.stringify(state.edit_form.select_fields))
            const key = action.payload.key
            let val = action.payload.val
            tempSelectFields[key] = val

            state.edit_form.select_fields = tempSelectFields

            const cityIsValid = tempSelectFields.city > 0
            if (!cityIsValid) {
                state.edit_form.state.disabled = true
            }
        },
        setDefaultProfileForm: state => {
            state.form = state.data
        },

        resetProfileData: state => {
            state.data = initialState.data
            state.form = initialState.form
            state.has_profile = initialState.has_profile
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


    },
})

export const {
    handleEditProfileTextFields,
    setDefaultProfileForm,
    resetProfileData
} = ProfileSlice.actions


export const profileReducer = ProfileSlice.reducer