import { AxiosInstance } from "axios";

import { IAddress } from "../Types/Address";

import { IAddressDataParams } from "./address.controller";

export class BetaAddressController {
  api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public async getAll(): Promise<Array<IAddress>> {
    const response = await this.api.get('/address'); 
    
    return response.data;
  };

  public async getOne(addressId: string): Promise<IAddress> {
    const response = await this.api.get(`/address/${addressId}`); 
    
    return response.data;
  };

  public async create(data: IAddressDataParams): Promise<IAddress> {
    const response = await this.api.post('/address', data); 
    
    return response.data;
  };
  
  public async edit(addressId: string, data: IAddressDataParams): Promise<IAddress> {
    const response = await this.api.put(`/address/${addressId}`, data); 

    return response.data;
  };

  public async delete(addressId: string): Promise<void> {
    return this.api.delete(`/address/${addressId}`);
  };
}