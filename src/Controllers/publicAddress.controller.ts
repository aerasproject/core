import { IPublicAddress } from "../Types/PublicAddress";

import { Api } from "..";

export type IPublicAddressDataParams = Omit<IPublicAddress, 'createdAt' | 'updatedAt'>; 

export class PublicAddressController {
    public async create(data: IPublicAddressDataParams): Promise<IPublicAddress> {
        const response = await Api.post('/publicaddress', data); 
        
        return response.data;
    };
}