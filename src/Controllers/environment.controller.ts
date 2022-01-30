import { IEnvironment } from "../Types/Environment";

import { Api } from "..";

export interface IEnvironmentDataParams {
    name: string;
    addressId: string;
}

export class EnvironmentController {
    public async getAll(addressId: string): Promise<Array<IEnvironment>> {
        const response = await Api.get(`/environment/${addressId}`); 
        
        return response.data;
    };

    public async create(data: IEnvironmentDataParams): Promise<IEnvironment> {
        const response = await Api.post('/environment', data); 
        
        return response.data;
    };

    public async delete(addressId: string): Promise<void> {
        return Api.delete(`/environment/${addressId}`);
    };
}