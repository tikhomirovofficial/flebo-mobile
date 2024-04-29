import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileCreateForm, ProfileData, ProfileEditTextFields } from "../../../types/entities/user.types";
import { GetProfileFilledRes, ProfileCreateReq, ProfileCreateRes, ProfileGetRes, StorePushTokenReq, StorePushTokenRes } from "../../../types/api/user.api.types";
import { AxiosResponse } from "axios";
import { UserApi } from "../../../http/api/user.api";
import { err } from "react-native-svg/lib/typescript/xml";


type ProfileSliceState = {
    has_profile: boolean | null
    data: ProfileData,
    form: Omit<ProfileData, "bonus">,
    loadings: {
        profile: boolean
    }
}

const initialState: ProfileSliceState = {
    has_profile: true,
    data: {
        first_name: "",
        last_name: "",
        subname: "",
        phone: "",
        dob: "",
        image: "",
        email: "",
        gender: true
    },
    form: {
        first_name: "",
        email: "",
        last_name: "",
        subname: "",
        dob: "",
        phone: "",
        image: "",
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
                    image: "/",
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
        handleProfileForm: (state, action: PayloadAction<{ key: keyof ProfileEditTextFields, val: string }>) => {
            const key = action.payload.key
            const val = action.payload.val

            if (key === "gender") {
                state.form[key] = Boolean(val)
                return
            }
            state.form[key] = val
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
    handleProfileForm,
    setDefaultProfileForm,
    resetProfileData
} = ProfileSlice.actions


export const profileReducer = ProfileSlice.reducer