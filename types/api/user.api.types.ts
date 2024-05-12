import { HasId, JWT, ResponseStatus } from "../common.types"
import { ProfileData, ProfilePersonData } from "../entities/user.types"

//Регитсрация по телефону
export type RegisterReq = {
    username: string
}
export type RegisterRes = ResponseStatus

//Авторизация
export type LoginReq = {
    username: string
    password: string
}
export type LoginRes = JWT & { details?: string }

// Перевыпустить refresh токен
export type AuthRefreshReq = Pick<JWT, "refresh">
export type AuthRefreshRes = Pick<JWT, "access">

// Получить данные пользователя
export type ProfileGetRes = ProfileData & ResponseStatus

// Получить доступные города
export type CitiesGetRes = {
    cities: Array<{ name: string } & HasId>
} & ResponseStatus

// Записать токен пуш-уведомлений
export type StorePushTokenReq = {
    token: string
    is_push: boolean
}
export type StorePushTokenRes = ResponseStatus

// Получить статус заполненности профиля
export type GetProfileFilledRes = {
    id: number,
    is_doc_signed: boolean,
    is_phone_confirm: boolean,
    is_fill_fio: boolean,
    push_token: string
} & HasId & ResponseStatus

// Изменение профиля
export type ProfileEditReq = Omit<ProfileData, "phone"> & {
    city: number
}
export type ProfileEditRes = {
    user: ProfileData
} & ResponseStatus
