import { AxiosInstance } from "axios";

import { IPublicAddress } from "../Types/PublicAddress";
import { IPublicAddressDataParams } from "./publicAddress.controller";

export class BetaPublicAddressController {
  api: AxiosInstance

  constructor(api: AxiosInstance) {
    this.api = api
  }

  public async create(data: IPublicAddressDataParams): Promise<IPublicAddress> {
    const response = await this.api.post('/publicaddress', data); 
      
    return response.data;
  };
}