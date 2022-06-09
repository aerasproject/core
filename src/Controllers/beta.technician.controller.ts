import { AxiosInstance } from "axios";

import { ITechnician } from "../Types/Technician";
import { ITechnicianDataParams } from "./technician.controller";

export class BetaTechnicianController {
  api: AxiosInstance

  constructor(api: AxiosInstance) {
    this.api = api
  }

  public async create(data: ITechnicianDataParams): Promise<ITechnician> {
    const response = await this.api.post('/technician', data); 
      
    return response.data;
  };
}