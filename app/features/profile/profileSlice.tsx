import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileData, ProfileEditTextFields } from "../../../types/entities/user.types";
import { CitiesGetRes, GetProfileFilledRes, ProfileEditReq, ProfileEditRes, ProfileGetRes, StorePushTokenReq, StorePushTokenRes } from "../../../types/api/user.api.types";
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
    edit_form: {
        select_fields: {
            gender: number
            city: number
        },
        text_fields: ProfileEditTextFields & { accept_password?: string }
        state: {
            sending: boolean
            disabled: boolean
            err: string
        }
        available_cities: Array<{ id: number, name: string }>
        available_genders: Array<{ id: number, name: string }>
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
        city: 0,
        last_name: "",
        subname: "",
        phone: "",
        dob: "",
        email: "",
        gender: true
    },
    edit_form: {
        select_fields: {
            gender: 0,
            city: 0
        },
        text_fields: {
            first_name: "",
            email: "",
            last_name: "",
            accept_password: "",
            subname: "",
            dob: "",
            password: ""
        },
        state: {
            sending: false,
            disabled: true,
            err: ""
        },
        available_cities: [],
        available_genders: [
            {
                id: 1,
                name: "Мужской"
            },
            {
                id: 2,
                name: "Женский"
            },
        ],

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
                    city: 0,
                    email: "",
                    dob: "2000-11-11",
                    gender: true
                })
            }, 1000)
        })
    }
)
export const getCities = createAsyncThunk(
    'cities/get',
    async (_, { dispatch }) => {
        // const res: AxiosResponse<ProfileGetRes> = await handleTokenRefreshedRequest(null, UserApi.GetProfile)
        // console.log("profile ", res.data);
        // return res.data
        return new Promise<CitiesGetRes>((res, rej) => {
            setTimeout(() => {
                res({
                    status: true,
                    cities: [
                        {
                            id: 1,
                            name: "Москва"
                        },
                        {
                            id: 2,
                            name: "Питер"
                        },
                        {
                            id: 3,
                            name: "Ульяновск"
                        }
                    ]
                })
            }, 1000)
        })
    }
)
export const editProfile = createAsyncThunk(
    'profile/edit',
    async (req: ProfileEditReq, { dispatch }) => {
        // const res: AxiosResponse<ProfileGetRes> = await handleTokenRefreshedRequest(null, UserApi.GetProfile)
        // console.log("profile ", res.data);
        // return res.data
        console.log(req);

        return new Promise<ProfileEditRes>((res, rej) => {
            setTimeout(() => {
                res({
                    status: true,
                    user: {
                        first_name: "Борис",
                        last_name: "Борисов",
                        phone: "79005001849",
                        city: 0,
                        subname: "Борисович",
                        email: "",
                        dob: "2000-11-11",
                        gender: true
                    }
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
        },
        checkValidForm: state => {
            const { text_fields, select_fields } = state.edit_form
            const { password, accept_password, ...neededFields } = text_fields

            const selectValiesAreValid = select_fields.city > 0 && select_fields.gender > 0
            const datesAreValid = state.edit_form.text_fields.dob.length === 10
            const allFieldsAreNotEmpty = Object.values(neededFields).every((val) => val.length > 0)
            const emailIsValid = EMAIL.test(text_fields["email"])
            let passwordsValid = true
            if (password !== undefined && accept_password !== undefined) {
                if (password.length > 0) {
                    console.log("Пароли нужны");

                    if (password !== accept_password) {
                        console.log(accept_password, password);
                        passwordsValid = false
                    }
                }
            }

            state.edit_form.state.disabled = !datesAreValid || !allFieldsAreNotEmpty || !emailIsValid || !passwordsValid || !selectValiesAreValid
        },
        setDefaultProfileForm: state => {
            state.edit_form = state.edit_form
        },

        resetProfileData: state => {
            state.data = initialState.data
            state.edit_form = initialState.edit_form
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
        //GET PROFILE CITIES
        builder.addCase(getCities.pending, (state, action) => {
            console.log(`Ожидаем ответ от заполненности профиля`);
        })
        builder.addCase(getCities.fulfilled, (state, action) => {
            state.edit_form.available_cities = action.payload.cities
        })
        builder.addCase(getCities.rejected, (state, action) => {
            console.log(action.error);
        })
        //PROFILE
        builder.addCase(getProfile.pending, (state, action) => {
            state.loadings.profile = true
        })
        builder.addCase(getProfile.fulfilled, (state, action) => {
            console.log(action.payload);
            state.data = action.payload
            //state.form = action.payload
            state.loadings.profile = false
        })
        builder.addCase(getProfile.rejected, (state, action) => {
            console.log(action.error);
            state.loadings.profile = false
        })
        //PROFILE EDIT
        builder.addCase(editProfile.pending, (state, action) => {
            state.edit_form.state.sending = true
        })
        builder.addCase(editProfile.fulfilled, (state, action) => {
            if (!state.has_profile) {
                state.has_profile = action.payload.status
            }
            state.edit_form.state.sending = false
        })
        builder.addCase(editProfile.rejected, (state, action) => {
            state.edit_form.state.err = "Не удалось создать профиль!"
            state.edit_form.state.sending = false
        })


    },
})

export const {
    handleEditProfileTextFields,
    handleEditProfileSelectFields,
    checkValidForm,
    setDefaultProfileForm,
    resetProfileData
} = ProfileSlice.actions


export const profileReducer = ProfileSlice.reducer