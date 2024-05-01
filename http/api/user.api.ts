import { AxiosResponse } from "axios";
import { api, authApi } from "../instances";
import { USER_PATHS } from "../paths/index.paths";
import { AuthRefreshReq, AuthRefreshRes, LoginReq, LoginRes } from "../../types/api/user.api.types";

export class UserApi {
    static async Login(req: LoginReq): Promise<AxiosResponse<LoginRes>> {
        const res: AxiosResponse<LoginRes> = await api.post(USER_PATHS.LOGIN, req);
        return res;
    }
    static async RefreshToken(req: AuthRefreshReq): Promise<AxiosResponse<AuthRefreshRes>> {
        const res: AxiosResponse<AuthRefreshRes> = await api.post(USER_PATHS.REFRESH, req);
        return res;
    }

}