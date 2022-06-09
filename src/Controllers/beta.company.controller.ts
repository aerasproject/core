import { AxiosInstance } from "axios";

import { ICompany } from "../Types/Company";
import { ICompanyDataParams } from "./company.controller";

export class BetaCompanyController {
  api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public async create(data: ICompanyDataParams): Promise<ICompany> {
    const response = await this.api.post('/company', data); 
    
    return response.data;
  };
} 