import { HasId } from "../common.types"

type DoctorTag = {
    text: string
} & HasId

export type DoctorApi = {
    first_name: string
    last_name: string
    middle_name: string
    active: boolean
    slong: number
    flong: number
    id_room: number,
    tags: DoctorTag[]
} & HasId