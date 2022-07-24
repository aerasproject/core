import { AxiosInstance } from "axios";

import { IEnvironment } from "../Types/Environment";
import { IEnvironmentDataParams } from "./environment.controller";

export class BetaEnvironmentController {
  api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public async getAll(addressId: string): Promise<Array<IEnvironment>> {
    const response = await this.api.get(`/environment/${addressId}`);

    return response.data;
  }

  public async create(data: IEnvironmentDataParams): Promise<IEnvironment> {
    const response = await this.api.post("/environment", data);

    return response.data;
  }

  public async delete(addressId: string): Promise<void> {
    return this.api.delete(`/environment/${addressId}`);
  }
}
