import { IUser } from "../Types/User";
import { USER_ROLES } from "../Enums/UserRoles";

import { Api } from "..";

export interface IUserDataParams {
    name: string;
    email: string;
    password: string;
    document: string;
    role: USER_ROLES;
}

export interface ILoginParams {
    email: string;
    password: string;
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

export interface ITokenResponse {
    user: IUser;
    token: string;
}

export class UserController {
    public async create(data: IUserDataParams): Promise<ITokenResponse> {
        const response = await Api.post('/user', data); 
        
        return response.data;
    };
    
    public async delete(userId: string): Promise<void> {
        return Api.delete(`/user/${userId}`);
    };
    
    public async login(data: ILoginParams): Promise<ITokenResponse> {
        const response = await Api.post('/user/login', data);

        return response.data;
    };

    public async changePassword(data: IChangePasswordParams): Promise<ITokenResponse> {
        return Api.put('/user/changepassword', data);
    };

    public async forgotPassword(data: IForgotPasswordParams): Promise<ITokenResponse> {
        return Api.post('/user/login', data);
    };

    public async resetPassword(data: IResetPasswordParams): Promise<ITokenResponse> {
        return Api.post('/user/login', data);
    };
}