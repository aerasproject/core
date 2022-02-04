import { IEquipment } from '../Types/Equipment'

import { Api } from "..";

export interface IEquipmentDataParams {
    name: string;
    brand: string;
    capacity: string;
    model: string;
    tag: string;
    type: string;
    voltage: string;
    environmentId: string;
    addressId: string;
}

export class EquipmentController {
    public async create(data: IEquipmentDataParams): Promise<IEquipment> {
        const response = await Api.post('/equipament', data);

        return response.data;
    }

    public async getById(equipmentId: string): Promise<IEquipment> {
        const response = await Api.get(`/equipament/${equipmentId}`);

        return response.data;
    };

    public async getByAddress(addressId: string): Promise<Array<IEquipment>> {
        const response = await Api.get(`/equipament/address/${addressId}`)
        
        return response.data;
    };

    public async edit(equipmentId: string, data: IEquipmentDataParams): Promise<IEquipment> {
        const response = await Api.put(`/equipament/${equipmentId}`, data); 

        return response.data;
    };

    public async delete(equipmentId: string): Promise<void> {
        return Api.delete(`/equipament/${equipmentId}`);
    };
}