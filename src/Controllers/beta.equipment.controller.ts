import { AxiosInstance } from "axios";

import { IEquipment } from "../Types/Equipment";
import { IEquipmentDataParams } from "./equipment.controller";

export class BetaEquipmentController {
  api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public async create(data: IEquipmentDataParams): Promise<IEquipment> {
    const response = await this.api.post("/equipment", data);

    return response.data;
  }

  public async getById(equipmentId: string): Promise<IEquipment> {
    const response = await this.api.get(`/equipment/${equipmentId}`);

    return response.data;
  }

  public async getByAddress(addressId: string): Promise<Array<IEquipment>> {
    const response = await this.api.get(`/equipment/address/${addressId}`);

    return response.data;
  }

  public async edit(
    equipmentId: string,
    data: IEquipmentDataParams
  ): Promise<IEquipment> {
    const response = await this.api.put(`/equipment/${equipmentId}`, data);

    return response.data;
  }

  public async delete(equipmentId: string): Promise<void> {
    return this.api.delete(`/equipment/${equipmentId}`);
  }
}
