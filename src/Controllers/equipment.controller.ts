import {IEquipment} from '../Types/Equipment'

import { Api, IEnvironment } from "..";

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

interface IGetByIdResponse {
    equipment: IEquipment;
    environment: IEnvironment;
}

// TODO: Arrumar interface
interface IGetByAddressResponse {
    batata: IGetByIdResponse[];
}

export class EquipmentController {
    public async create(data: IEquipmentDataParams): Promise<IEquipment> {
        const response = await Api.post('/equipment', data);

        return response.data;
    }

    public async getById(equipmentId: string): Promise<IGetByIdResponse> {
        return Api.get(`/equipament/${equipmentId}`);
    };

    public async getByAddress(addressId: string): Promise<IGetByAddressResponse> {
        return Api.get(`/equipament/address/${addressId}`);
    };

    public async edit(equipmentId: string, data: IEquipmentDataParams): Promise<IGetByIdResponse> {
        const response = await Api.put(`/equipament/${equipmentId}`, data); 

        return response.data;
    };

    public async delete(equipmentId: string): Promise<void> {
        return Api.delete(`/equipament/${equipmentId}`);
    };
}