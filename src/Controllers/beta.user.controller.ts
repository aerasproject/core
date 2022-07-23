import { AxiosInstance } from "axios";
import { ILoginParams, ITokenResponse } from "Types/Authentication";

import {
  IChangePasswordParams,
  IForgotPasswordParams,
  IUserDataParams,
  IResetPasswordParams,
} from "./user.controller";

export class BetaUserController {
  api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public async create(data: IUserDataParams): Promise<ITokenResponse> {
    const response = await this.api.post("/user", data);

    return response.data;
  }

  public async delete(userId: string): Promise<void> {
    return this.api.delete(`/user/${userId}`);
  }

  public async login(data: ILoginParams): Promise<ITokenResponse> {
    const response = await this.api.post("/user/login", data);

    return response.data;
  }

  public async changePassword(
    data: IChangePasswordParams
  ): Promise<ITokenResponse> {
    return this.api.put("/user/changepassword", data);
  }

  public async forgotPassword(
    data: IForgotPasswordParams
  ): Promise<ITokenResponse> {
    return this.api.post("/user/login", data);
  }

  public async resetPassword(
    data: IResetPasswordParams
  ): Promise<ITokenResponse> {
    return this.api.post("/user/login", data);
  }
}
