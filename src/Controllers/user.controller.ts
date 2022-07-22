import { IUser } from "../Types/User";
import { USER_ROLES } from "../Enums/UserRoles";

import { Api } from "..";
import { ITokenResponse } from "../Types/Authentication";

export interface IUserDataParams {
  name: string;
  email: string;
  password: string;
  document: string;
  role: USER_ROLES;
}

export interface IUpdateUser {
  name: string;
  email: string;
  document: string;
  role: USER_ROLES;
}

export interface IChangePasswordParams {
  oldPassword: string;
  newPassword: string;
}

export interface IResetPasswordParams {
  token: string;
  password: string;
}

export interface IForgotPasswordParams {
  email: string;
}

export class UserController {
  public async create(data: IUserDataParams): Promise<ITokenResponse> {
    const response = await Api.post("/user", data);

    return response.data;
  }

  public async edit(data: IUpdateUser): Promise<IUser> {
    const response = await Api.put("/user", data);

    return response.data;
  }

  public async delete(userId: string): Promise<void> {
    return Api.delete(`/user/${userId}`);
  }

  public async changePassword(
    data: IChangePasswordParams
  ): Promise<ITokenResponse> {
    return Api.put("/user/changepassword", data);
  }

  public async forgotPassword(
    data: IForgotPasswordParams
  ): Promise<ITokenResponse> {
    return Api.post("/user/forgotpassword", data);
  }

  public async resetPassword(
    data: IResetPasswordParams
  ): Promise<ITokenResponse> {
    return Api.post("/user/resetpassword", data);
  }
}
