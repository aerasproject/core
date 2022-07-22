import { IUser } from "./User";

export interface ILoginParams {
  email: string;
  password: string;
}

export interface ITokenResponse {
  user: IUser;
  token: string;
}
