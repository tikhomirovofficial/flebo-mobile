import { CanLoadPart, HasPart, ResponseStatus } from "../common.types"
import { DoctorApi } from "../entities/doctors.types"

//Получить всех врачей
export type AllDoctorsGetReq = HasPart
export type AllDoctorsGetRes = {
    doctors: DoctorApi[]
} & ResponseStatus & CanLoadPart

//Получить врача
export type DoctorByIdGetReq = {id: number}
export type DoctorByIdGetRes = {
    doctor: DoctorApi
} & ResponseStatus