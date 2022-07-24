import { Api } from "..";

import { USER_ROLES } from "../Enums/UserRoles";

import { IUser } from "../Types/User";
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
}
