import { IUser } from "../Types/User";

import { Api } from "..";

export interface ICreateParams {
    name: string;
    email: string;
    password: string;
    document: string;
    role: string;
}

export interface ILoginParams {
    email: string;
    password: string;
}

export interface ILoginResponse {
    user: IUser;
    token: string;
}

export class UserController {
    public async create(data: ICreateParams): Promise<IUser> {
        return Api.post('/user', data);
    };
    
    public async delete(userId: string): Promise<void> {
        return Api.delete(`/user/${userId}`);
    };
    
    public async login(data: ILoginParams): Promise<ILoginResponse> {
        return Api.post('/user/login', data);
    };
}