import { NavigationProp } from "@react-navigation/native";

export type NavProps = {
    navigation: NavigationProp<any>
};
export type JWT = {
    refresh: string
    access: string
}
export type ResponseStatus = {
    status: boolean
}
export type HasId = {
    id: number
}
export type HasPart = {
    part: number
}
export type CanLoadPart = {
    can_next: boolean
}
export type HasPagination = {
    part_loading: boolean
} & CanLoadPart & HasPart

