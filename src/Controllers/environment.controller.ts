import { IAddress } from "../Types/Address";

import { Api } from "..";

export interface IDataParams {
    name: string;
    addressId: string;
}

export class EnvironmentController {
    public async getAll(addressId: string): Promise<Array<IAddress>> {
        const response = await Api.get(`/environment/${addressId}`); 
        
        return response.data;
    };

    public async create(data: IDataParams): Promise<IAddress> {
        const response = await Api.post('/environment', data); 
        
        return response.data;
    };

    public async delete(addressId: string): Promise<void> {
        return Api.delete(`/environment/${addressId}`);
    };
}