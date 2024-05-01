
export type ProfileData = {
    first_name: string
    last_name: string
    subname: string
    dob: string
    city: number,
    gender: boolean,
    phone: string,
    email: string
    password?: string
}
export type ProfilePersonData = {
    pob: string
    passport_issue_date: string
    passport_issued_by: string,
    passport_series: string,
    passport_id: string,
    email: string
}

export type ProfileEditTextFields = Pick<ProfileData, | "first_name" | "last_name" | "subname" | "dob" | "email"> & { password?: string }
