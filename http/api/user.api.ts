import { AxiosResponse } from "axios";
import { api, authApi } from "../instances";
import { USER_PATHS } from "../paths/index.paths";
import { LoginReq, LoginRes } from "../../types/api/user.api.types";

export class UserApi {
    static async Login(req: LoginReq): Promise<AxiosResponse<LoginRes>> {
        const res: AxiosResponse<LoginRes> = await api.post(USER_PATHS.LOGIN, req);
        return res;
    }

}