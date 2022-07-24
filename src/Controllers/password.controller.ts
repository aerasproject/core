import { Api } from "../Services";
import { ITokenResponse } from "../Types/Authentication";

export interface IForgotPasswordParams {
  email: string;
}

export interface IChangePasswordParams {
  oldPassword: string;
  newPassword: string;
}

export interface IResetPasswordParams {
  token: string;
  password: string;
}

export class PasswordController {
  public async forgot(data: IForgotPasswordParams): Promise<ITokenResponse> {
    return Api.post("/password/forgot", data);
  }

  public async change(data: IChangePasswordParams): Promise<ITokenResponse> {
    return Api.post("/password/change", data);
  }

  public async reset(data: IResetPasswordParams): Promise<ITokenResponse> {
    return Api.post("/password/reset", data);
  }
}
