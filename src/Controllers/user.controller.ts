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

export interface ITokenResponse {
    user: IUser;
    token: string;
}

export class UserController {
    public async create(data: ICreateParams): Promise<ITokenResponse> {
        const response = await Api.post('/user', data); 
        
        return response.data();
    };
    
    public async delete(userId: string): Promise<void> {
        return Api.delete(`/user/${userId}`);
    };
    
    public async login(data: ILoginParams): Promise<ITokenResponse> {
        const response = await Api.post('/user/login', data);

        return response.data();
    };
}