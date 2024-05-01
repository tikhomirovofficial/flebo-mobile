import { AxiosResponse } from "axios";
import { api, authApi } from "../instances";
import { DOCTORS_PATHS, USER_PATHS } from "../paths/index.paths";
import { AuthRefreshReq, AuthRefreshRes, LoginReq, LoginRes } from "../../types/api/user.api.types";
import { AllDoctorsGetReq, AllDoctorsGetRes } from "../../types/api/doctors.api.types";

export class DoctorsApi {
    static async GetAll(req: AllDoctorsGetReq): Promise<AxiosResponse<AllDoctorsGetRes>> {
        const res: AxiosResponse<AllDoctorsGetRes> = await api.post(DOCTORS_PATHS.GET_ALL, req);
        return res;
    }
}