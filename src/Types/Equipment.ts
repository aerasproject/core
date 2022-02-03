import { IEnvironment } from "..";

export interface IEquipment {
    id: string; 
    name: string; 
    tag: number; 
    brand: string; 
    model: string; 
    voltage: string; 
    capacity: string; 
    type: string; 
    environmentId: string;
    enviroment: IEnvironment;
    addressId: string;  
    createdAt: string; 
    updatedAt: string; 
  }