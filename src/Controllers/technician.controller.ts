import { ITechnician } from "../Types/Technician";

import { Api } from "..";

export interface ITechnicianDataParams {
  document: string;
  phone: string;
  services: Array<string>;
}

export class TechnicianController {
  public async create(data: ITechnicianDataParams): Promise<ITechnician> {
    const response = await Api.post("/technician", data);

    return response.data;
  }

  public async getById(technicianId: string): Promise<ITechnician> {
    const response = await Api.get(`/technician/${technicianId}`);

    return response.data;
  }
}
