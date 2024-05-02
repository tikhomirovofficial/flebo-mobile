import { HasId } from "../common.types"

export type DocumentApi = {
    created: string,
    name: string,
    url: string
} & HasId