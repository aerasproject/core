import { User } from "../Types/User";

import { Api } from "..";

export interface CreateParams {
    name: string;
    email: string;
    password: string;
    document: string;
    role: string;
}

export interface LoginParams {
    email: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    token: string;
}

export class UserController {
    public async create(data: CreateParams): Promise<User> {
        return Api.post('/users', data);
    };
    
    public async delete(userId: string): Promise<void> {
        return Api.delete(`/users/${userId}`);
    };
    
    public async login(data: LoginParams): Promise<LoginResponse> {
        return Api.post('/users/login', data);
    };
}