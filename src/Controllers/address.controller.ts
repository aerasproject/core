import { IAddress } from "../Types/Address";

import { Api } from "..";

export interface IAddressDataParams {
    name: string;
    isFavorite: boolean;
    street: string;
    number: string;
    city: string;
    state: string;
    neighborhood: string;
    complement: string;
}

export class AddressController {
    public async getAll(): Promise<Array<IAddress>> {
        const response = await Api.get('/address'); 
        
        return response.data;
    };

    public async getOne(addressId: string): Promise<IAddress> {
        const response = await Api.get(`/address/${addressId}`); 
        
        return response.data;
    };

    public async create(data: IAddressDataParams): Promise<IAddress> {
        const response = await Api.post('/address', data); 
        
        return response.data;
    };
    
    public async edit(addressId: string, data: IAddressDataParams): Promise<IAddress> {
        const response = await Api.put(`/address/${addressId}`, data); 

        return response.data;
    };

    public async delete(addressId: string): Promise<void> {
        return Api.delete(`/address/${addressId}`);
    };
}